// export const BASE_URL = 'http://codercba.com:8000'
// export const BASE_URL = 'http://coderwhy.dev:8000'
// 开发环境和生产环境 对应不同的url地址
// vite提供的环境变量
console.log(import.meta.env.MODE) // 模式是开放环境还是生产环境
console.log(import.meta.env.PROD) // 是否是生产环境

let BASE_URL = ''
if (import.meta.env.PROD) {
  BASE_URL = 'http://coderwhy.prod:8000'
} else {
  BASE_URL = 'http://coderwhy.dev:8000'
}

console.log(BASE_URL)

const TIME_OUT = 10000
export { BASE_URL, TIME_OUT }
