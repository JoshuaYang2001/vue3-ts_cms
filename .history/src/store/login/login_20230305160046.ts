import { defineStore } from 'pinia'
import { accountLoginRequest, getuserInfoById } from '@/service/login/login'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'
import router from '@/router'
const LOGIN_TOKEN = 'token'
const useLoginStore = defineStore('login', {
  state: () => ({
    // id: '',
    token: localStorage.getItem(LOGIN_TOKEN) ?? ''
    // name: ''
  }),
  actions: {
    // eslint-disable-next-line prettier/prettier
    async accountLoginRequest(account: IAccount) {
      // 获取token等信息
      const loginResult = await accountLoginRequest(account) // 异步拿到相应结果
      const id = loginResult.data.id
      this.token = loginResult.data.token //将响应的数据存到数据仓库中
      const name = loginResult.data.name

      // 进行本地缓存
      localCache.setCache(LOGIN_TOKEN, this.token)

      // 获取登录用户的详细信息  需要携带token
      const userInfoResult = await getuserInfoById(id)
      log
      console.log(userInfoResult)

      // 页面跳转
      router.push('/main')
    }
  }
})

export { useLoginStore }
