import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.less'
import App from './App.vue'
import router from './router'
import pinia from './store'
import 'element-plus/dist/index.css'

const app = createApp(App) // 创建app示例

app.use(router)
app.use(pinia)
app.mount('#app') // 挂载到#app上