<template>
  <div class="main">
    <h2>main</h2>
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
</style>
