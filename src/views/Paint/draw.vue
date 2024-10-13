<template>
  <div
    class="flex-3 flex flex-direction-row w-100% h-100% min-h-screen bg-gray-300"
  >
    <div class="flex w-4/5 h-100% content-center justify-center">
      <canvas ref="canvasRef" class="w-4/5 bg-black"></canvas>
    </div>
    <div class="w-1/5 h-100%"></div>
  </div>
</template>

<script setup lang="ts">
import { path } from "@tauri-apps/api";
import { defineComponent, onMounted, ref } from "vue";
import MapPath from "../../statics/images/maps/de_dust2.png";
// 获取画布对象
const canvasRef = ref<HTMLCanvasElement | null>(null);

let defaultScale = 1; // 默认缩放倍数
var isMouseDown = false; // 是否处于鼠标拖动状态

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

  // 示例绘制：绘制一个蓝色矩形
  ctx.fillStyle = "blue";
  ctx.fillRect(10, 10, 100, 100);

  //   载入图片资源
  const img = new Image();
  img.src = MapPath;
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;

  // 等待图片加载完
  img.onload = () => {
    // 图片加载完成后执行的逻辑
    console.log("图片加载完成");

    drawImageOnCanvas(ctx, img);
  };
});

// 封装 drawImage 方法
function drawImageOnCanvas(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement
) {
  const canvas = ctx.canvas;
  // 根据图片调整 canvas 的大小
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;

  // 绘制图片
  ctx.drawImage(img, 0, 0);
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
