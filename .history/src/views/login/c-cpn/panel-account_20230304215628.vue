<template>
  <div class="panel-account">
    <el-form
      label-width="60px"
      :model="account"
      :rules="accountRules"
      ref="formRef"
    >
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
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormRules, ElForm } from 'element-plus'
import { useLoginStore } from '@/store/login/login'
//1. 双向绑定表单数据
import type { IAccount } from '@/types/index'
import { localCache } from '@/utils/cache'

// 账号和密码
const account = reactive<IAccount>({
  name: localCache.getCache('name') ?? '', //非空断言
  password: localCache.getCache('password') ?? ''
})

// 2. 配置表单校验规则
const accountRules: FormRules = {
  name: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{6,18}$/,
      message: '账号的长度需要在3到8位',
      trigger: 'blur' // 触发的方式
    }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码应该3位以上的字母和数字',
      trigger: 'blur'
    }
  ]
}

// 3. 登录逻辑
const formRef = ref<InstanceType<typeof ElForm>>()
const loginStore = useLoginStore()
function loginAction(isRemPwd) {
  formRef.value?.validate((valid) => {
    //validate的参数是一个回调函数
    if (valid) {
      const name = account.name
      const password = account.password
      loginStore.accountLoginRequest({ name, password })
      if (isRemPwd) {
        localCache.setCache('name', name)
        localCache.setCache('password', password)
      }
      // 向后台发送账号和密码，以及根据token执行跳转逻辑
      // 如果验证成功,发送网络请求，请求逻辑单独抽取
      // accountLoginRequest({ name, password }).then((res) => {
      //   console.log(res)
      // })
      // loginAction

      ElMessage({
        message: 'Congrats, this is a success message.',
        type: 'success'
      })
    } else {
      console.log('验证失败')
    }
  })
}
defineExpose({ loginAction })
</script>

<style lang="less" scoped>
.panel-account {
  color: palegreen;
}
</style>
