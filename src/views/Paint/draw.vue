<template>
  <div
    class="flex-3 flex flex-direction-row w-100% h-100% min-h-screen bg-gray-300"
  >
    <div class="flex w-4/5 h-100% content-center justify-center">
      <canvas ref="canvas" class="w-4/5 bg-red-100"></canvas>
    </div>
    <div class="w-1/5 h-100%"></div>
  </div>
</template>

<script setup lang="ts">

import image from "../../statics/images/maps/de_dust2.png"; // 假设你的assets目录在src目录下

import { onMounted, ref, Ref } from 'vue';

const canvas: Ref<HTMLCanvasElement | null> = ref(null);

onMounted(() => {
  if (canvas.value) {
    const ctx = canvas.value.getContext('2d');
    if (ctx) {
      drawCanvas(ctx); // 绘制图形
    }
  }
});

function drawCanvas(ctx: CanvasRenderingContext2D): void {
  // 清除整个 canvas
  ctx.clearRect(0, 0, canvas.value!.width, canvas.value!.height);

  // 绘制背景颜色
  ctx.fillStyle = '#f0f0f0';
  ctx.fillRect(0, 0, canvas.value!.width, canvas.value!.height);

  // 绘制一个蓝色矩形
  ctx.fillStyle = 'blue';
  ctx.fillRect(50, 50, 100, 100);




}


</script>

<style scoped>
/* 仅应用于此组件的样式 */
.flex-3 {
  flex: 3;
}
.flex-4 {
  flex: 4;
}
</style>
