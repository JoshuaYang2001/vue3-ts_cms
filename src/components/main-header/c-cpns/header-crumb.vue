<template>
  <div class="header-crumb">
    <el-breadcrumb separator-icon="ArrowRight">
      <template v-for="item in breadCrumps" :key="item.name">
        <el-breadcrumb-item :to="item.path">{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { useLoginStore } from '@/store/login/login'
import { mapPathToBreadcrumps } from '@/utils/map-menu'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
const route = useRoute()
const loginStore = useLoginStore()
const userMenus = loginStore.userMenus
const breadCrumps = computed(() => {
  return mapPathToBreadcrumps(route.path, userMenus)
})
</script>

<style lang="less" scoped>
.header-crumb {
  color: red;
}
</style>
