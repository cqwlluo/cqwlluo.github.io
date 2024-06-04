<script setup>
import { ref, onMounted } from "vue";
import { difficulty } from "@/data";
const current = ref();
onMounted(() => {
  current.value = difficulty[0];
  current.value.selected = true;

});
const setCurrent = (item) => {
  difficulty.forEach((e) => {
    e.selected = false;
  });
  current.value = item;
  current.value.selected = true;
};
</script>
<template>
  <div class="difficulty">
    <div class="left">
      <div
        class="left-list"
        v-for="(item, index) in difficulty"
        :key="index"
        @click="setCurrent(item)"
        :class="{ selected: item.selected }"
      >
        {{ item.title }}
      </div>
    </div>
    <div class="right" v-if="!!current">
      <p>{{ current.info }}</p>
      <img :src="current.img" v-if="current.img" alt="" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.difficulty {
  display: flex;
  padding: 20px 0;
  height: 100%;
  position: relative;
  justify-content: space-between;

  .left {
    width: 25%;
    height: 100%;

    border-right: 1px solid #ccc;
    .left-list {
      color: #ccc;
      font-size: 32px;
      text-align: center;
      height: 60px;
      line-height: 60px;
      cursor: pointer;
      &:hover {
        color: rgb(219, 26, 161);
        background-color: rgba(51, 53, 204, 0.5);
      }
      &.selected {
        color: rgb(129, 233, 11);
        background-color: rgba(129, 233, 11, 0.5);
      }
    }
  }
  .right {
    width: 75%;
    height: 100%;
    padding: 0 5%;
    overflow: auto;
    p {
      font-size: 20px;
      color: #fff;
      margin-bottom: 20px;
      text-indent: 2em;
    }
    img {
      width: 60%;
    }
  }
}
</style>
