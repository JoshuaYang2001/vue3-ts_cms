import { localCache } from '@/utils/cache'
import { BASE_URL, TIME_OUT } from './config'
import HYRequest from './request'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    // 请求拦截器
    requestSuccessFn: (config): any => {
      if (config.headers) {
        config.headers.Authorization = 'Bearer' + localCache.getCache('token')
      }
    }
  }
})

export default hyRequest
