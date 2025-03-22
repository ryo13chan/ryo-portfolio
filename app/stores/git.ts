import type { _GettersTree } from 'pinia'
import type { CommitData, State, Actions } from '~/types/stores/git'

export const useGitStore = defineStore<'git', State, _GettersTree<State>, Actions>(
  'git',
  {
    state: () => ({
      commitData: null,
    }),
    actions: {
      async getCommitData() {
        const response = await $fetch<CommitData>('https://api.github.com/repos/ryo13chan/ryo-portfolio/commits/master')
        this.commitData = response
      },
    },
  },
)
