<template>
  <div class="main">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
    <button @click="handleExitClick">退出</button>
  </div>
</template>

<script setup lang="ts">
import { localCache } from '@/utils/cache'
import { useRouter } from 'vue-router'

const router = useRouter()
function handleExitClick() {
  localCache.removeCache('token')
  router.push('/login')
}
</script>

<style lang="less" scoped>
.main {
  color: red;
}
.el-aside {
  background-color: antiquewhite;
  height: 100vh;
}
</style>
