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

export type Actions = {
  getCommitData(): Promise<void>
}
