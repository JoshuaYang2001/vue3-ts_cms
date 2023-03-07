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

const useLoginStore = defineStore('login',  state: (): ILoginState => ({
  token: '',
  userInfo: {},
  userMenus: []
}),
actions: {
  async accountLoginAction(account: any) {
    // 1.获取登录信息
    const loginRes = await accountLogin(account)
    const { id, token } = loginRes.data
    this.token = token

    // 2.保存在cache中
    localCache.setCache('token', token)

    // 3.获取用户信息
    const userRes = await getUserById(id)
    this.userInfo = userRes.data
    localCache.setCache('useInfo', this.userInfo)

    // 4.根据role的id获取菜单
    const roleId = this.userInfo.role.id
    const menuRes = await getRoleMenus(roleId)
    this.userMenus = menuRes.data
    localCache.setCache('userMenus', this.userMenus)

    // 跳转到首页
    router.push('/main')
  },

  loadLocalDataAction() {
    this.token = localCache.getCache('token')
    this.userInfo = localCache.getCache('userInfo')
    this.userMenus = localCache.getCache('userMenus')
    console.log('------')
  }
}
)

export { useLoginStore }
