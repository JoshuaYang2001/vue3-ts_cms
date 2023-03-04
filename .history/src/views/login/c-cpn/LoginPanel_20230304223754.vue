<template>
  <div class="LoginPanel">
    <h1 class="title">后台管理系统</h1>
    <div class="tab">
      <el-tabs type="border-card" stretch v-model="activeName">
        <!-- 账号登录 -->
        <el-tab-pane label="账号登录" name="account">
          <template #label>
            <el-icon><UserFilled /></el-icon>
            <span>账号登录</span>
          </template>

          <PanelAccount ref="accountRef" />
        </el-tab-pane>

        <!-- 手机登录 -->
        <el-tab-pane label="手机登录" name="phone">
          <template #label>
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </template>
          <PanelPhone />
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="controls">
      <el-checkbox
        v-model="isRemPwd"
        label="记住密码"
        size="large"
      ></el-checkbox>
      <el-link href="#" type="primary">找回密码</el-link>
    </div>

    <el-button
      class="login-btn"
      type="primary"
      size="large"
      @click="handleLoginBtn"
      >立即登录</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { localCache } from '@/utils/cache'
import { ref, watch } from 'vue'
import PanelAccount from './panel-account.vue'
import PanelPhone from './panel-phone.vue'
const isRemPwd = ref<boolean>(localCache.setCache ?? '') // 是否记住密码
watch(isRemPwd, (newValue) => {
  localCache.setCache('isRemPwd', newValue)
})
const activeName = ref('account')
const accountRef = ref<InstanceType<typeof PanelAccount>>() // 这里的PanelAccount是一个构造器
function handleLoginBtn() {
  if (activeName.value == 'account') {
    accountRef.value?.loginAction(isRemPwd.value)
    if (isRemPwd.value) {
      console.log('记住账号和密码')
    }
  } else {
    console.log(2)
  }
}
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
