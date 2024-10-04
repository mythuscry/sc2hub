<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import Draw from "./views/Paint/draw.vue";
import Extend from "./views/Paint/extend.vue";
import Toolbar from "./views/Paint/toolbar.vue";
</script>

<template>
  <header></header>
      <Extend />
      <Draw />
      <Toolbar />
</template>

<style scoped>

</style>