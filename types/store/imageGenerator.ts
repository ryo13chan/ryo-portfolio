import { ImagesResponse, CreateImageRequestSizeEnum } from 'openai'

export type State = {
  images: Array<{ prompt: string } & ImagesResponse>
}

export type Getters = {}

export type Actions = {
  createImage(
    apiKey: string,
    prompt: string,
    n?: number,
    size?: CreateImageRequestSizeEnum
  ): Promise<void>
}
