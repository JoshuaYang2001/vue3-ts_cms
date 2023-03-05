<template>
  <div class="panel-phone">
    <el-form label-width="60px" size="large">
      <el-form-item label="手机号">
        <el-input />
      </el-form-item>
      <el-form-item label="验证码">
        <el-input />

        <el-button type="primary">点击发送</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.vertify-code {
  display: flex;
}
.panel-phone {
  color: red;
}
</style>
