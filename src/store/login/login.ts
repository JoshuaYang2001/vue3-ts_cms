import { defineStore } from 'pinia'
import { accountLoginRequest } from '@/service/login/login'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'
const LOGIN_TOKEN = 'token'
const useLoginStore = defineStore('login', {
  state: () => ({
    id: '',
    token: localStorage.getItem(LOGIN_TOKEN) ?? '',
    name: ''
  }),
  actions: {
    // eslint-disable-next-line prettier/prettier
    async accountLoginRequest(account: IAccount) {
      const loginResult = await accountLoginRequest(account) // 异步拿到相应结果
      this.id = loginResult.data.id
      this.token = loginResult.data.token //将响应的数据存到数据仓库中
      this.name = loginResult.data.name

      // 将token永久保留
      localCache.setCache(LOGIN_TOKEN, this.token)
    }
  }
})

export { useLoginStore }
