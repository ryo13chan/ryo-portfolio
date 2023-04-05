<script setup lang="ts">
import TerminalService from 'primevue/terminalservice'
import { ChatCompletionRequestMessageRoleEnum } from 'openai'

const title = ref('ChatGPTターミナル')
useHead({
  title: title.value,
})

const chatGptStore = useChatGptStore()
const { createChatCompletion, clearChatCompletion } = chatGptStore

onMounted(() => TerminalService.on('command', commandHandler))
onBeforeUnmount(() => TerminalService.off('command', commandHandler))
const commandHandler = async (text: string) => {
  let response
  const argsIndex = text.indexOf(' ')
  const command = argsIndex !== -1 ? text.substring(0, argsIndex) : text

  switch (command) {
    case 'clear':
      terminal.value.commands = []
      clearChatCompletion()
      response = ''
      break

    case 'system':
      TerminalService.emit('response', 'please wait...')
      response = await createChatCompletion(
        text.substring(argsIndex + 1),
        ChatCompletionRequestMessageRoleEnum.System
      )
      break

    default:
      TerminalService.emit('response', 'please wait...')
      response = await createChatCompletion(text)
      break
  }

  TerminalService.emit('response', response)
}
const terminal = ref()
</script>

<template>
  <div class="mx-2 lg:px-8">
    <h2>{{ title }}</h2>
    <Terminal
      ref="terminal"
      welcomeMessage=" "
      prompt="ChatGPT $"
      class="dark-demo-terminal"
      aria-label="PrimeVue Terminal Service"
    />
  </div>
</template>

<style scoped lang="scss">
@import 'primeflex/primeflex';

:deep(.p-terminal) {
  height: 65vh;
  white-space: pre-wrap;
}

:deep(.dark-demo-terminal) {
  color: #fff;
  background-color: #212121;
  border-radius: 1rem;

  & > div:first-child {
    position: sticky;
    top: -1rem;
    height: 1.5rem;
    margin: -1rem -1rem 0.5rem;
    background-color: gray;
  }
}

:deep(.dark-demo-terminal .p-terminal-command) {
  color: #80cbc4;
}

:deep(.dark-demo-terminal .p-terminal-prompt) {
  color: #ffd54f;
}

:deep(.dark-demo-terminal .p-terminal-response) {
  color: #9fa8da;
}
</style>
