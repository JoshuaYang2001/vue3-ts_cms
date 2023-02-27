<template>
  <div class="login">
    <loginPanel />
  </div>
</template>

<script setup lang="ts">
import hyRequest from '@/service'
import loginPanel from './c-cpn/LoginPanel.vue'
hyRequest
  .get({
    url: '/home/multidata'
  })
  .then((res) => {
    console.log(res)
  })
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url(../../assets/img/login-bg.svg);
}
</style>
