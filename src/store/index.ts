import { createPinia } from 'pinia'
import type { App } from 'vue'
import { useLoginStore } from '../store/login/login'

const pinia = createPinia()

function registerStore(app: App<Element>) {
  app.use(pinia)
  const LoginStore = useLoginStore()
  LoginStore.loadLocalCacheAction()
}

export default registerStore
