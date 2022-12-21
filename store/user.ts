import { defineStore } from 'pinia'

type User = {
  id: number
  name: string
}

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [] as User[],
  }),
  getters: {
    getUserCount: (state): number => state.users.length,
  },
  actions: {
    getUsers() {
      $fetch(
        'https://api.github.com/repos/ryo13chan/web-portfolio/commits/master'
      )
      this.users = [
        { id: 1, name: 'ryo' },
        { id: 2, name: 'john' },
      ]
    },
  },
})
