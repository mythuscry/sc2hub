<template>
  <div class="flex-3 flex flex-direction-row w-full h-full min-h-screen bg-white">
    <div class="flex w-4/5 h-full content-center justify-center">
      <canvas ref="canvasRef" class=" bg-black "></canvas>
    </div>
    <div class="w-1/5 h-100%"></div>
  </div>
</template>

<script setup lang="ts">

import { onMounted, ref } from "vue";
import MapPath from "../../statics/images/maps/de_dust2.png";
// 获取画布对象
const canvasRef = ref<HTMLCanvasElement | null>(null);
const dpr = window.devicePixelRatio;

onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) {
    console.error("Canvas element not found");
    return;
  }

  // 获取 2D 绘图上下文
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    console.error("Unable to get 2D context");
    return;
  }

  //   载入图片资源
  const img = new Image();
  img.src = MapPath;
  canvas.width = window.innerHeight;
  canvas.height = window.innerWidth;

  canvas.style.width = '1024px';
  canvas.style.height = '1024px';

  // 等待图片加载完
  img.onload = () => {
    // 图片加载完成后执行的逻辑
    console.log("图片加载完成");

    drawImageOnCanvas(ctx, img);
  };
});


function drawImageOnCanvas(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement
) {
  const canvas = ctx.canvas;
  ctx.scale(dpr, dpr);
  // 根据图片调整 canvas 的大小
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;


  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 绘制图片
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);


  console.log("img w" + img.naturalWidth);
  console.log("img h" + img.naturalHeight);
  console.log("canvas w" + canvas.width);
  console.log("canvas h" + canvas.height);

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
