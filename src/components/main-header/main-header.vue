<template>
  <div class="nav-header">
    <div class="menu-icon" @click="handleMenuIconClick">
      <el-icon size="28px">
        <component :is="isFold ? 'Expand' : 'Fold'"></component>
      </el-icon>
    </div>
    <div class="content">
      <headerCrumb />
      <headerInfo />
    </div>
  </div>
</template>

<script setup lang="ts">
import headerCrumb from './c-cpns/header-crumb.vue'
import headerInfo from './c-cpns/header-info.vue'
import { ref } from 'vue'
const emit = defineEmits(['foldChange'])
const isFold = ref(false)
function handleMenuIconClick() {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}
</script>

<style lang="less" scoped>
.nav-header {
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;

  .menu-icon {
    display: flex;
    align-items: center;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 18px;
  }
}
</style>
