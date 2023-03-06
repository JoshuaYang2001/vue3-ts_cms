import { defineStore } from 'pinia'
import {
  accountLoginRequest,
  getuserInfoById,
  getuserInfoByRoleId
} from '@/service/login/login'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'
import router from '@/router'
const LOGIN_TOKEN = 'token'

interface IloginState {
  token: string
  userInfo: any
  userMenus: any
}

const useLoginStore = defineStore('login', {
  state: (): IloginState => ({
    token: localStorage.getItem(LOGIN_TOKEN) ?? '',
    userInfo: {},
    userMenus: []
  }),
  actions: {
    // eslint-disable-next-line prettier/prettier
    async accountLoginRequest(account: IAccount) {
      // 获取token等信息
      const loginResult = await accountLoginRequest(account) // 异步拿到相应结果
      const id = loginResult.data.id
      this.token = loginResult.data.token //将响应的数据存到数据仓库中
      const name = loginResult.data.name

      // 获取登录用户的详细信息  需要携带token
      const userInfoResult = await getuserInfoById(id)

      this.userInfo = userInfoResult.data
      console.log(this.userInfo)

      // 根据角色请求用户权限（菜单menus）
      const userMenusResult = await getuserInfoByRoleId(this.userInfo.role.id)
      this.userMenus = userMenusResult
      console.log(this.userMenus)

      // 页面跳转
      router.push('/main')
    }
  }
})

export { useLoginStore }
