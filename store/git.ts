import { Actions, Getters, State } from '~/types/store/git'

export const useGitStore = defineStore<'git', State, Getters, Actions>('git', {
  state: () => ({
    commitData: null,
  }),
  getters: {
    commitUrl: (state) => (state.commitData ? state.commitData.html_url : ''),
    commitMessage: (state) =>
      state.commitData ? state.commitData.commit.message : '',
    commitDate: (state) =>
      state.commitData ? state.commitData.commit.author.date : '',
  },
  actions: {
    async getCommitData() {
      this.commitData = await $fetch(
        'https://api.github.com/repos/ryo13chan/ryo-portfolio/commits/master'
      )
    },
  },
})
