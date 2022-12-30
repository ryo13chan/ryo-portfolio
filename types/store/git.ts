export type CommitData = {
  html_url: string
  commit: {
    message: string
    author: {
      date: string
    }
  }
}

export type State = {
  commitData: CommitData | null
}

export type Getters = {
  commitUrl(state: State): string
  commitMessage(state: State): string
  commitDate(state: State): string
}

export type Actions = {
  getCommitData(): Promise<void>
}
