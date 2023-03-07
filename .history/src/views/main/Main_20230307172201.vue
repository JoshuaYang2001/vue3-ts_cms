<template>
  <div class="main">
    <el-container>
      <el-aside :width="isCollapse ? '60px' : '210px'">
        <MainMenu :is-fold="isCollapse" />
      </el-aside>
      <el-container>
        <el-header>
          <MainHeader @fold-change="handleFoldChange" />
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
import { ref } from 'vue'
import MainMenu from '@/components/main-menu/main-menu.vue'
import MainHeader from '@/components/main-header/main-header.vue'
const router = useRouter()
function handleExitClick() {
  localCache.removeCache('token')
  router.push('/login')
}

// 处理main-header中折叠的变化
const isCollapse = ref(false)
function handleFoldChange(flag: boolean) {
  isCollapse.value = flag
}
</script>

<style lang="less" scoped>
.el-aside {
  background-color: antiquewhite;
  height: 100vh;
  overflow-x: hidden;
  transition: width 0.8s ease;
}
.el-header {
  background-color: rgb(255, 255, 255);
}
.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
</style>
