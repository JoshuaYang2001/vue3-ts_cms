### 第一天

1. eslint 和 prettier 的相关配置

```js
在.eslintrc.cjs中添加，以解决multi-word的eslint警告
rules: {
    'vue/multi-word-component-names': 0
  },
```

2. 配置 tsvue 的代码片段 用到 snippet generator（网站）的工具
3. 在路由中匹配 404 页面: 用到通配符

```js
 {
      // 路径用通配符实现匹配规定路由以外的404路由
      path: '/:pathMatch(.*)',
      component: () => import('../views/not-found/NotFound.vue')
    }
```

4.初始 pinia 状态管理

5.修改配置以允许隐式 any
在 tsconig 中

```js
"compilerOptions": {
    // 给vscode来读取的
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    "noImplicitAny": false // 允许隐式的any值
  },
```

### 了解开发环境和生产环境的不同，并学习通过 if 结构和 import.meta.env 对象实现自动根据生产环境选择相应的服务器地址（baseURL）

### 实现组件自动导入

先安装官网上 unplugin-vue-components 和 unplugin-auto-import 这两款插件
再在 vite.config.js 增加如下内容

```js
plugins: [
  vue(),
  AutoImport({
    resolvers: [ElementPlusResolver()]
  }),
  Components({
    resolvers: [ElementPlusResolver()]
  })
]
```

了解如何覆盖 elmentui 的样式的两种办法

1. 在 css 文件夹中的 common.less 中修改全局变量
2. 在自己写的类中修改变量 （！important）
