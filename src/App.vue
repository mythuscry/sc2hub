<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import Draw from "./components/draw.vue";
import Extend from "./components/extend.vue";
</script>

<template>
  <header></header>
  <div class="container">
    <div class="left-section">
      <Extend />
    </div>
    <div class="middle-section">
      <Draw />
    </div>
    <div class="right-section">
      <Toolbar />
    </div>
  </div>
</template>

<style scoped>
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

.container {
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: rgb(30, 29, 29);
}

.left-section {
  width: 13%;
  background-color: rgb(23, 22, 22);
  flex:1;
}

.middle-section {
  width: 66%;
  flex:4;
  overflow: hidden; /* 隐藏超出容器的内容 */
  background-color: greenyellow;
}

.right-section {
  width: 13%;
  background-color: rgb(246, 244, 244);
  flex:1;
}

/** auto just zoom***/
@media (max-width: 1200px) {
  .left-section {
    display: none;
  }
  .right-section {
   flex: 1;
  }

  .middle-section {
    flex: 3;
  }

  @media (max-width:1000px) {

    .left-section,
    .right-section {
      display: none;
    }

    .middle-section {
      flex: 3;
    }
  }
}
</style>