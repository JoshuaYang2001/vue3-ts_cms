import hyRequest from '..'

export function accountLoginRequest(account: any) {
  return hyRequest.post({
    url: '/login',
    data: account
  })
}
