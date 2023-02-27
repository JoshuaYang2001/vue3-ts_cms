<template>
  <div class="LoginPanel">
    <h1 class="title">后台管理系统</h1>
    <div class="tab">
      <el-tabs type="border-card" stretch>
        <el-tab-pane label="账号登录">User</el-tab-pane>

        <el-tab-pane label="手机登录">Role</el-tab-pane>
      </el-tabs>
    </div>
    <div class="controls">
      <el-checkbox
        v-model="isRemPsd"
        label="记住密码"
        size="large"
      ></el-checkbox>
      <el-link href="#" type="primary">找回密码</el-link>
    </div>

    <el-button class="login-btn" type="primary" size="large"
      >立即登录</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isRemPsd = ref(false)
</script>

<style lang="less" scoped>
.LoginPanel {
  width: 330px;
  margin-bottom: 150px;

  .title {
    text-align: center;
    margin-bottom: 15px;
  }
  .controls {
    display: flex;
    justify-content: space-between;
  }
  .login-btn {
    width: 330px;
    margin-top: 10px;
  }
}
</style>
