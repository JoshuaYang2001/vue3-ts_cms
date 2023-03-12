import type { RouteRecordRaw } from 'vue-router'

function loadLocalRoutes() {
  // 将零散分布在各个文件的路由搜集起来
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

// 动态添加路由板块
export function mapMenusToRouters(userMenus: any[]) {
  const localRoutes = loadLocalRoutes()
  // 根据菜单去匹配正确的路由
  const routes: RouteRecordRaw[] = []

  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      const route = localRoutes.find((item) => item.path == submenu.url) // 根据请求菜单的url动态添加路由
      // 给route的顶层菜单增加重定向功能
      // 这里加个if判断，进行类型缩小，防止route是undefined
      if (route) {
        if (!routes.find((item) => item.path === menu.url)) {
          routes.push({ path: menu.url, redirect: route.path })
        }
        // 将route的二级菜单加到routes里
        routes.push(route)
      }

      if (!firstMenu && route) firstMenu = submenu
    }
  }
  return routes
}

/**
 * 根据路径匹配菜单
 * @param path
 * @param userMenus
 */

export function mapPathToMenu(path: string, userMenus: any[]) {
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      if (submenu.url == path) {
        return submenu
      }
    }
  }
  return undefined
}

interface IBreadcrumps {
  name: string
  path?: string
}

// 根据路径映射面包屑

export function mapPathToBreadcrumps(path: string, userMenus: any[]) {
  // 定义面包屑
  const breadcrumps: IBreadcrumps[] = []
  // 遍历获取面包屑的层级
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      if (submenu.url == path) {
        breadcrumps.push({ name: menu.name, path: menu.url })
        breadcrumps.push({ name: submenu.name, path: submenu.url })
      }
    }
  }
  return breadcrumps
}
