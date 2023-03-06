<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="@/assets/img/logo.svg" alt="logo" />
      <span class="title">弘源管理系统</span>
    </div>
    <el-menu
      default-active="1-2"
      text-color="#b7bdc3"
      active-text-color="#fff"
      background-color="#001529"
    >
      <el-row class="tac">
        <el-col :span="12">
          <h5 class="mb-2">Default colors</h5>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span>Navigator One</span>
              </template>
              <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
              <el-icon><icon-menu /></el-icon>
              <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <el-icon><document /></el-icon>
              <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon><setting /></el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="12">
          <h5 class="mb-2">Custom colors</h5>
          <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            default-active="2"
            text-color="#fff"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span>Navigator One</span>
              </template>
              <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
              <el-icon><icon-menu /></el-icon>
              <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <el-icon><document /></el-icon>
              <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon><setting /></el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-menu>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.nav-menu {
  height: 100%;
  background-color: #001529;
}

.logo {
  display: flex;
  height: 28px;
  padding: 12px 10px 8px 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  .img {
    height: 100%;
    margin: 0 10px;
  }

  .title {
    font-size: 16px;
    font-weight: 700;
    color: white;
  }
}

.el-sub-menu {
  .el-menu-item {
    padding-left: 50px !important;
    background-color: #0c2135;
  }

  .el-menu-item:hover {
    color: #fff;
  }

  .el-menu-item.is-active {
    background-color: #0a60bd;
  }
}
</style>
