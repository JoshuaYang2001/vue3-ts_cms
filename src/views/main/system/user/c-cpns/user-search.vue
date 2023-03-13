<template>
  <div class="search">
    <el-form ref="formRef" :model="searchForm" label-width="80px" size="large">
      <el-row :gutter="50">
        <el-col :span="8"
          ><el-form-item label="姓名" prop="name">
            <el-input
              v-model="searchForm.name"
              placeholder="请输入查询的用户名"
            ></el-input> </el-form-item
        ></el-col>
        <el-col :span="8"
          ><el-form-item label="真实姓名" prop="realName">
            <el-input
              v-model="searchForm.realName"
              placeholder="请输入查询的用户名"
            ></el-input> </el-form-item
        ></el-col>
        <el-col :span="8"
          ><el-form-item label="用户名" prop="cellphone">
            <el-input
              v-model="searchForm.cellphone"
              placeholder="请输入查询的用户名"
            ></el-input> </el-form-item
        ></el-col>
        <el-col :span="8"
          ><el-form-item label="状态" prop="enable">
            <el-select
              placeholder="请选择状态"
              style="width: 100%"
              v-model="searchForm.enable"
            >
              <el-option label="启用" value="1" />
              <el-option label="禁用   " value="0" />
            </el-select> </el-form-item
        ></el-col>
        <el-col :span="8"
          ><el-form-item label="用户名" prop="createAt">
            <el-date-picker
              type="daterange"
              range-separator="-"
              start-placeholder="开始日期时间"
              end-placeholder="结束日期时间"
              v-model="searchForm.createAt"
            /> </el-form-item
        ></el-col>
      </el-row>
    </el-form>
    <div class="btns">
      <el-button icon="refresh" @click="handleResetClick">重置</el-button>
      <el-button type="primary" icon="search" @click="handleQueryClick"
        >查询</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ElForm } from 'element-plus'
import { reactive, ref } from 'vue'

const searchForm = reactive({
  name: '',
  realName: '',
  cellphone: '',
  enable: '',
  createAt: ''
})

const formRef = ref<InstanceType<typeof ElForm>>() // 创建一个响应式的对象来cu存 Elform的实例
function handleResetClick() {
  formRef.value?.resetFields()
}
function handleQueryClick() {
  console.log('handleQueryCLick')
}
</script>

<style lang="less" scoped>
.search {
  color: red;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
}
.el-form {
  padding: 20px;
}
.el-col {
  margin-top: 10px;
}
.btns {
  text-align: right;
  padding: 10px;
}
</style>
