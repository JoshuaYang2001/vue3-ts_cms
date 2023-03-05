import hyRequest from '..'

export function accountLoginRequest(account: any) {
  return hyRequest.post({
    url: '/login',
    data: account // post是data, param是？连在url地址上的
  })
}
