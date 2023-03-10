import type { RouteRecordRaw } from 'vue-router'

function loadLocalRoutes() {
  // 自动化获取所有路由对象
  const localRoutes: RouteRecordRaw[] = []
  // 1. 读取router/main中所有的ts文件
  const files: Record<string, any> = import.meta.glob(
    '../router/main/**/*.ts',
    {
      // ** 表示匹配所有的子目录
      eager: true
    }
  )

  for (const keys in files) {
    //获取的files的键值就是地址
    const module = files[keys]
    console.log(module.default) // default 是我们在路由匹配规则的对象
    localRoutes.push(module.default)
  }
  return localRoutes
}

export let firstMenu: any = null // 第一次进入的菜单

export function mapMenusToRouters(userMenus: any[]) {
  const localRoutes = loadLocalRoutes()
  // 根据菜单去匹配正确的路由
  const routes: RouteRecordRaw[] = []

  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      const route = localRoutes.find((item) => item.path == submenu.url)
      if (route) routes.push(route) // 这里加个if判断，进行类型缩小，防止route是undefined
      if (!firstMenu && route) firstMenu = submenu
    }
  }
  return routes
}
