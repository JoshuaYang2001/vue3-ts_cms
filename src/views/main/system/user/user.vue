<template>
  <div class="user">
    <userSearch />
    <userContent />
    pagination
  </div>
</template>

<script setup lang="ts">
import userContent from './c-cpns/user-content.vue'
import userSearch from './c-cpns/user-search.vue'
</script>

<style lang="less" scoped>
.user {
  color: red;
}
</style>
