<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import Draw from "./views/Paint/draw.vue";
import Extend from "./views/Paint/extend.vue";
</script>

<template>
  <div class="flex flex-grow flex-direction-row min-h-screen">
    <Extend />
    <Draw />
  </div>
</template>

<style scoped>
html,
::v-deep(body) {
  overflow: hidden;
}
/* 确保Flex容器撑满整个屏幕 */
.flex {
  display: flex; /* 设置为Flex容器 */
  height: 100%; /* 设置高度为100% */
}
</style>
