import { localCache } from '@/utils/cache'
import { BASE_URL, TIME_OUT } from './config'
import HYRequest from './request'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      if (config.headers!) {
        config.headers.Authorization = 'Bearer' + localCache.getCache('token')
      }
      return config
    }
  }
})

export default hyRequest
