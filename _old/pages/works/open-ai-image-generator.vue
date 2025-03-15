<script setup lang="ts">
import dayjs from 'dayjs'
import { CreateImageRequestSizeEnum } from 'openai'

const title = ref('OpenAI Image Generator')
useHead({
  title: title.value,
})

const imageGeneratorStore = useImageGeneratorStore()
const { createImage } = imageGeneratorStore
const { images } = storeToRefs(imageGeneratorStore)

const apiKey = ref('')
const prompt = ref('')
const number = ref(1)
const size = ref(CreateImageRequestSizeEnum._256x256)
const sizeOptions = [
  { label: '256x256', value: CreateImageRequestSizeEnum._256x256 },
  { label: '512x512', value: CreateImageRequestSizeEnum._512x512 },
  { label: '1024x1024', value: CreateImageRequestSizeEnum._1024x1024 },
]
const isLoading = ref(false)

const generate = async () => {
  try {
    isLoading.value = true
    await createImage(apiKey.value, prompt.value, number.value, size.value)
  } catch {
    alert('Failed to generate image')
  } finally {
    isLoading.value = false
  }
}

const createdAt = computed(
  () => (timestamp: number) => dayjs.unix(timestamp).format('YYYY-MM-DD HH:mm')
)
</script>

<template>
  <div class="mx-2 lg:px-8">
    <h2>{{ title }}</h2>
    <div class="flex flex-column gap-2 mb-3">
      <label for="api-key">API Key</label>
      <InputText id="api-key" v-model="apiKey" class="w-10rem" />
    </div>
    <div class="flex flex-column gap-2 mb-3">
      <label for="prompt">Prompt</label>
      <InputText id="prompt" v-model="prompt" />
    </div>
    <div class="flex gap-5 mb-3">
      <div class="flex flex-column gap-2">
        <label for="number">Number</label>
        <InputNumber
          v-model="number"
          inputId="number"
          showButtons
          :min="1"
          :max="10"
          inputClass="w-5rem"
        />
      </div>
      <div class="flex flex-column gap-2">
        <label for="size">Size</label>
        <Dropdown
          v-model="size"
          :options="sizeOptions"
          optionLabel="label"
          optionValue="value"
          placeholder="Select a City"
          id="size"
          class="w-10rem"
        />
      </div>
    </div>
    <div class="flex justify-content-end mb-3">
      <Button
        :loading="isLoading"
        :disabled="!apiKey || !prompt || !number"
        label="Generate"
        @click="generate"
      />
    </div>
    <div class="flex flex-column gap-3">
      <Card v-for="image in images" :key="image.created">
        <template #title>{{ image.prompt }}</template>
        <template #subtitle>{{ createdAt(image.created) }}</template>
        <template #content>
          <div class="flex flex-wrap gap-3">
            <Image
              v-for="data in image.data"
              :key="data.url"
              :src="data.url"
              width="250"
            />
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'primeflex/primeflex';
</style>
