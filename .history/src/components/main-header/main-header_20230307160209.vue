<template>
  <div class="nav-header">
    <div class="menu-icon">
      <el-icon size="28px"><Fold /></el-icon>
    </div>
    <div class="content">
      <span>面包屑</span>
      <span>个人信息</span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.nav-header {
  display: flex;
  align-items: center;
  /* flex: 1; */
  height: 100%;
  background-color: palegoldenrod;

  .menu-icon {
    <!-- /* display: flex; */ -->
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
