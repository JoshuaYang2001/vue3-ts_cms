<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="@/assets/img/logo.svg" alt="logo" />
      <span class="title">弘源管理系统</span>
    </div>
    <el-menu
      default-active="1-2"
      text-color="#b7bdc3"
      active-text-color="#fff"
      background-color="#001529"
    >
      <!-- <el-sub-menu index="1">
        <template #title>
          <el-icon><Monitor /></el-icon>
          <span>系统总览</span>
        </template>
        <el-menu-item>核心技术</el-menu-item>
        <el-menu-item>商品统计</el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="2">
        <template #title>
          <el-icon><Monitor /></el-icon>
          <span>系统管理</span>
        </template>
        <el-menu-item>核心技术</el-menu-item>
        <el-menu-item>商品统计</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <el-icon><Monitor /></el-icon>
          <span>商品中心</span>
        </template>
        <el-menu-item>商品类别</el-menu-item>
        <el-menu-item>商品信息</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <el-icon><Monitor /></el-icon>
          <span>随便聊聊</span>
        </template>
        <el-menu-item>你的故事</el-menu-item>
        <el-menu-item>故事列表</el-menu-item>
      </el-sub-menu> -->

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
            <el-menu-item :index="subitem.id + ''">{{
              subitem.name
            }}</el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { useLoginStore } from '@/store/login/login'
// 用pinia里的数据进行渲染
const loginStore = useLoginStore()
const userMenus = loginStore.userMenus.data
console.log(userMenus)
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
