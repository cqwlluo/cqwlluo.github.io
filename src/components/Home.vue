<script setup>
import { ref, onMounted } from "vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { useStar } from "../hooks/useStar";

onMounted(() => {
  useStar(1200);
});
</script>
<template>
  <div class="cont">
    <Header />
    <div class="content-container" ref="content">
      <canvas id="star-bg-canvas"></canvas>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.cont {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  .content-container {
    width: 100%;
    position: relative;
    flex-grow: 1;
    canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .content {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
  }
}
</style>
