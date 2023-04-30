import { Actions, State } from '~/types/store/imageGenerator'
import {
  Configuration,
  OpenAIApi,
  CreateImageRequest,
  CreateImageRequestSizeEnum,
} from 'openai'

export const useImageGeneratorStore = defineStore<
  'imageGenerator',
  State,
  {},
  Actions
>('imageGenerator', {
  state: () => ({
    images: [],
  }),
  actions: {
    async createImage(
      apiKey,
      prompt,
      n = 1,
      size = CreateImageRequestSizeEnum._256x256
    ) {
      const configuration = new Configuration({
        apiKey,
      })
      delete configuration.baseOptions.headers['User-Agent'] // コンソールエラー回避
      const openai = new OpenAIApi(configuration)
      const request: CreateImageRequest = { prompt, n, size }

      const response = await openai.createImage(request)
      this.images.unshift({ prompt, ...response.data })
    },
  },
})
