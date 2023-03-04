import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(), // 两种history的区别在什么地方
  // router选项是一个保存有多个对象的数组，每个对象都有对路由地址的记录
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      // component 选项后面为什么要用箭头函数按需导入
      component: () => import('../views/login/Login.vue')
    },
    {
      path: '/main',
      component: () => import('../views/main/Main.vue')
    },
    {
      // 路径用通配符实现匹配规定路由以外的404路由
      path: '/:pathMatch(.*)',
      component: () => import('../views/not-found/NotFound.vue')
    }
  ]
})

// 导航守卫
router.beforeEach((to) => {
  const token = localStorage.getItem('token')

  if (to.path === '/main' && !token) {
    return '/login'
  }
})

export default router
