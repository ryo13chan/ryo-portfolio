import { Actions, Getters, State } from '~/types/store/chatGpt'
import {
  Configuration,
  OpenAIApi,
  ChatCompletionRequestMessageRoleEnum,
} from 'openai'

export const useChatGptStore = defineStore<'chatGpt', State, Getters, Actions>(
  'chatGpt',
  {
    state: () => ({
      messages: [],
    }),
    getters: {},
    actions: {
      async createChatCompletion(
        content,
        role = ChatCompletionRequestMessageRoleEnum.User
      ) {
        const configuration = new Configuration({
          apiKey: useNuxtApp().$config.public.openaiApiKey,
        })
        delete configuration.baseOptions.headers['User-Agent'] // コンソールエラー回避
        const openai = new OpenAIApi(configuration)

        this.messages.push({
          role,
          content,
        })

        try {
          const response = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: this.messages,
            max_tokens: 1000,
          })
          this.messages.push({
            role: ChatCompletionRequestMessageRoleEnum.Assistant,
            content: response.data.choices[0].message
              ? response.data.choices[0].message?.content
              : '',
          })
          return response.data.choices[0].message?.content
        } catch {}
      },
      clearChatCompletion() {
        this.messages = []
      },
    },
  }
)
