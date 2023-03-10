import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.less'
import App from './App.vue'
import router from './router'
import Store from './store'
import 'element-plus/dist/index.css' // 如果不想全局引入样式 可以使用vite-plugin-style-import这个包，按需引入
import Icons from './global/register.icons'

const app = createApp(App) // 创建app示例
app.use(Icons)
app.use(Store)
app.use(router)
app.mount('#app') // 挂载到#app上
