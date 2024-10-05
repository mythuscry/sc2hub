<template>
  <div
    class="flex-3 flex flex-direction-row w-100% h-100% min-h-screen bg-orange-500"
  >
    <div class="w-4/5 h-100%">
      <canvas ref="Canvas" class="w-100% h-3/4"></canvas>
    </div>
    <div class="w-1/5 h-100%">2</div>
  </div>
</template>

<script setup lang="ts">
import { path } from "@tauri-apps/api";
import { ref, onMounted } from "vue";

const canvas = ref(null);
const ctx = ref(null);

onMounted(() => {
  if (canvas.value) {
    ctx.value = canvas.value.getContext("2d");
    const img = new Image();
    img.onload = () => {
      // 当图片加载完成后，绘制到canvas上
      ctx.value.drawImage(img, 0, 0, canvas.value.width, canvas.value.height);
    };
    path = "../../statics/images/maps"; // 操作路径下
    img.src = path + "cs_italy.png";
  }
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
