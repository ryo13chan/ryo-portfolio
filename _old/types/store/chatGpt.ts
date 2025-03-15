import {
  ChatCompletionRequestMessage,
  ChatCompletionRequestMessageRoleEnum,
} from 'openai'

export type State = {
  messages: ChatCompletionRequestMessage[]
}

export type Getters = {}

export type Actions = {
  createChatCompletion(
    content: string,
    role?: ChatCompletionRequestMessageRoleEnum
  ): Promise<string | undefined>
  clearChatCompletion(): void
}
