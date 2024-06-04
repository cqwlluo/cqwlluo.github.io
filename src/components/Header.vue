<script setup>
import { ref } from "vue";
const list = ref([
  { name: "首页", path: "/", selected: true },
  { name: "前端难点", path: "/difficulty", selected: false },
  { name: "常见面试", path: "/interview", selected: false },
  { name: "前端资讯", path: "/news", selected: false },
]);
const select = (item) => {
  list.value.forEach((e) => {
    e.selected = false;
  });
  item.selected = true;
};
</script>
<template>
  <div class="header">
    <router-link
      v-for="item in list"
      :key="item.path"
      :to="item.path"
      @click="select(item)"
      :class="{ selected: item.selected }"
    >
      {{ item.name }}
    </router-link>
  </div>
</template>

<style scoped lang="scss">
.header {
  height: 60px;
  width: 100%;
  background-color: rgb(30, 30, 30);
  padding: 0 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    color: rgb(143, 143, 143);
    text-decoration: none;
    &.selected,
    &:hover {
      color: #fff;
    }
  }
}
</style>
