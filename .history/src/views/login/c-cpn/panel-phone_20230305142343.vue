<template>
  <div class="panel-phone">
    <el-form label-width="60px" size="large">
      <el-form-item label="手机号">
        <el-input />
      </el-form-item>
      <el-form-item label="验证码">
        <div class="vertify-code">
          <el-input />
          <el-button type="primary" class="get-btn" @click="sendVertifyCode"
            >点击发送</el-button
          >
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
function sendVertifyCode() {
  console.log('这里要调发短信的接口')
}
</script>

<style lang="less" scoped>
.vertify-code {
  display: flex;
  justify-content: space-around;
  .get-btn {
    margin-left: 7px;
  }
}
.panel-phone {
  color: red;
}
</style>
