import { defineStore } from 'pinia'
import {
  accountLoginRequest,
  getuserInfoById,
  getuserInfoByRoleId
} from '@/service/login/login'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'
import router from '@/router'
import type { RouteRecordRaw } from 'vue-router'
// 常量
const LOGIN_TOKEN = 'token'
const USER_MENUS = 'userMenus'
const USER_INFO = 'userInfo'

interface IloginState {
  token: string
  userInfo: any
  userMenus: any
}

const useLoginStore = defineStore('login', {
  state: (): IloginState => ({
    token: localStorage.getItem(LOGIN_TOKEN) ?? '',
    userInfo: localCache.getCache(USER_INFO) ?? {},
    userMenus: localCache.getCache(USER_MENUS) ?? []
  }),
  actions: {
    // eslint-disable-next-line prettier/prettier
    async accountLoginRequest(account: IAccount) {
      // 获取token等信息
      const loginResult = await accountLoginRequest(account) // 异步拿到相应结果
      const id = loginResult.data.id
      this.token = loginResult.data.token //将响应的数据存到数据仓库中

      // 存token
      localCache.setCache(LOGIN_TOKEN, this.token)
      // 获取登录用户的详细信息  需要携带token
      const userInfoResult = await getuserInfoById(id)

      this.userInfo = userInfoResult.data
      console.log(this.userInfo)

      // 根据角色请求用户权限（菜单menus）
      const userMenusResult = await getuserInfoByRoleId(this.userInfo.role.id)
      this.userMenus = userMenusResult.data
      console.log(this.userMenus)

      // 进行本地缓存

      localCache.setCache(USER_INFO, this.userInfo)
      localCache.setCache(USER_MENUS, this.userMenus)

      // 动态添加路由
      const localRoutes: RouteRecordRaw[] = []
      // 1. 读取router/main中所有的ts文件
      const files: Record<string, any> = import.meta.glob(
        '../../router/main/**/*.ts',
        {
          // ** 表示匹配所有的子目录
          eager: true
        }
      )

      for (const keys in files) {
        const module = files[keys]
        console.log(module.default)
      }
      console.log(files)

      // 页面跳转
      router.push('/main')
    }
  }
})

export { useLoginStore }
