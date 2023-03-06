import hyRequest from '..'
import { localCache } from '@/utils/cache'

export function accountLoginRequest(account: any) {
  return hyRequest.post({
    url: '/login',
    data: account // post是data, param是？连在url地址上的
  })
}

export function getuserInfoById(id: number) {
  return hyRequest.get({
    url: `/users/${id}`,
    headers: {
      Authorization: localCache.getCache('token')
    } // 每个请求如果都要加一个Authorization写在这儿就太麻烦了
  })
}

export function getuserInfoByRoleId(id: number) {
  return hyRequest.get({
    url: `/role/${id}/menu`,
    headers: {
      Authorization: localCache.getCache('token')
    } // 每个请求如果都要加一个Authorization写在这儿就太麻烦了
  })
}
