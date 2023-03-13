<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="@/assets/img/logo.svg" alt="logo" />
      <span v-show="!isFold" class="title">弘源管理系统</span>
    </div>

    <el-menu
      :default-active="defaultActive"
      text-color="#b7bdc3"
      :collapse="isFold"
      active-text-color="#fff"
      background-color="#001529"
    >
      <template v-for="item in userMenus" :key="item.id">
        <el-sub-menu :index="item.id + ''">
          <template #title>
            <el-icon>
              <!-- 动态组件渲染图标 -->
              <component :is="item.icon.split('-icon-')[1]"></component>
            </el-icon>
            <span>{{ item.name }}</span>
          </template>
          <template v-for="subitem in item.children" :key="subitem.id">
            <el-menu-item
              :index="subitem.id + ''"
              @click="handleItemClick(subitem)"
              >{{ subitem.name }}</el-menu-item
            >
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
import { useLoginStore } from '@/store/login/login'
import { mapPathToMenu } from '@/utils/map-menu'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
// 用pinia里的数据进行渲染
const loginStore = useLoginStore()
const userMenus = loginStore.userMenus

console.log(userMenus)

// 设置 menu 默认高亮菜单
const route = useRoute()
console.log(route.path)

const defaultActive = computed(() => {
  //点击面包屑改变路由之后，重新计算defaultActive
  const pathMenu = mapPathToMenu(route.path, userMenus)
  return pathMenu.id + ''
})

// 折叠菜单
defineProps({
  isFold: {
    type: Boolean,
    default: false
  }
})

function handleItemClick(item: any) {
  router.push(item.url)
}
</script>

<style lang="less" scoped>
.nav-menu {
  height: 100%;
  background-color: #001529;
}

.logo {
  display: flex;
  height: 28px;
  padding: 12px 10px 8px 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  .img {
    height: 100%;
    margin: 0 10px;
  }

  .title {
    font-size: 16px;
    font-weight: 700;
    color: white;
    white-space: nowrap; /*标题文本不换行*/
  }
}

.el-sub-menu {
  .el-menu-item {
    padding-left: 50px !important;
    background-color: #0c2135;
  }

  .el-menu-item:hover {
    color: #fff;
  }

  .el-menu-item.is-active {
    background-color: #0a60bd;
  }
}
</style>
