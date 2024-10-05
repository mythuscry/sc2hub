<template>
  <div
    class="flex-3 flex flex-direction-row w-100% h-100% min-h-screen bg-gray-300"
  >
    <div class="flex w-4/5 h-100% content-center justify-center">
      <canvas ref="RefCanvas" class="w-4/5 bg-red-100"></canvas>
    </div>
    <div class="w-1/5 h-100%"></div>
  </div>
</template>

<script setup lang="ts">
import { path } from "@tauri-apps/api";
import { defineComponent, onMounted, ref } from "vue";
import image from "../../statics/images/maps/de_dust2.png"; // 假设你的assets目录在src目录下

defineComponent({
  setup() {
    const canvasRef = ref<HTMLCanvasElement | null>(null);

    onMounted(() => {
      if (canvasRef.value) {
        const ctx = canvasRef.value.getContext("2d");
        if (ctx) {
          const img = new Image();
          img.onload = () => {
            ctx.drawImage(img, 0, 0); // 将图片绘制到canvas上
          };
          img.src = image; // 设置图片源为引入的图片
        }
      }
    });

    return {
      canvasRef,
    };
  },
});
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
