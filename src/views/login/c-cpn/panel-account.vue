<template>
  <div class="panel-account">
    <el-form label-width="60px" :model="account" :rules="accountRules">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type { FormRules } from 'element-plus'
//1. 双向绑定表单数据
const account = reactive({
  name: '',
  password: ''
})

// 2. 配置表单校验规则
const accountRules: FormRules = {
  name: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{6,18}$/,
      message: '账号的长度需要在3到8位',
      trigger: 'change' // 触发的方式
    }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码应该3位以上的字母和数字',
      trigger: 'change'
    }
  ]
}

// 3. 登录逻辑

function loginAction() {
  console.log('fuchunluoshishabi')
}
defineExpose({ loginAction })
</script>

<style lang="less" scoped>
.panel-account {
  color: palegreen;
}
</style>
