<template>
  <div class="main">
    <el-container>
      <el-aside width="200px">
        <MainMenu />
      </el-aside>
      <el-container>
        <el-header>
          <MainHeader />
          <button @click="handleExitClick">退出</button>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { localCache } from '@/utils/cache'
import { useRouter } from 'vue-router'
import MainMenu from '@/components/main-menu/main-menu.vue'
import MainHeader from '@/components/main-header/main-header.vue'
const router = useRouter()
function handleExitClick() {
  localCache.removeCache('token')
  router.push('/login')
}
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
}
.el-aside {
  background-color: antiquewhite;
  height: 100vh;
}
.el-header {
  background-color: pink;
}
.el-main {
  background-color: aquamarine;
}
</style>
