<script setup lang="ts">
// 1. 根据不同的map type会切换不同背景图片到canavas当中


</script>

<template>

      <div class="Canvas-Container ">
        <canvas id="myCanvas" width="768px" height="670px"></canvas>
      </div>
</template>

<style>

  .Canvas-Container{
   display: flex;
   justify-content: center;
   align-items: center;
  }

  #myCanvas{
    box-sizing: border-box; /* 包含边框 */
    border: 1px solid #f80000;
  }

</style>