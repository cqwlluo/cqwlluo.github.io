<script setup>
import { ref, onMounted } from "vue";
import { user } from "@/data";

const content = ref();
const isObject = (item) => {
  return Object.prototype.toString.call(item) === "[object Object]";
};
const typeObj = ref(true);
const selectList = (data) => {
  user.forEach((item) => {
    item.selected = false;
  });

  data.selected = true;
  typeObj.value = isObject(data.info);
  content.value = data.info;
};

onMounted(() => {
  selectList(user[0]);
});
</script>
<template>
  <div class="my">
    <div class="left">
      <div
        class="my-list"
        v-for="(item, index) in user"
        :key="index"
        :class="{ selected: item.selected }"
        @click="selectList(item)"
      >
        {{ item.title }}
      </div>
    </div>
    <div class="middle">
      <div class="my-content" v-if="typeObj">
        <div
          class="my-content-info"
          v-for="(value, key, index) in content"
          :key="key"
        >
          <span class="title">{{ key }}：</span
          ><span class="value">{{ value }}</span>
        </div>
      </div>
      <div class="my-content" v-else>
        <div class="my-content-info">{{ content }}</div>
      </div>
      <img
        class="img"
        src="../assets/img/rick.jpeg"
        alt=""
      />
    </div>
    <div class="right"></div>
  </div>
</template>

<style scoped lang="scss">
.my {
  padding: 20px 0;
  height: 100%;
  display: flex;
  .left,
  .middle,
  .right {
    height: 100%;
  }
  .left {
    width: 20%;
    display: flex;
    flex-direction: column;
    background-color: transparent;
    align-items: center;
    color: #fff;
    .my-list {
      height: 60px;
      line-height: 60px;
      font-size: 32px;
      text-align: center;
      width: 100%;
      cursor: pointer;
      &:hover {
        color: skyblue;
        background-color: rgba(255, 255, 255, 0.5);
      }
      &.selected {
        color: rgb(255, 69, 0);
        background-color: rgba(135, 206, 235, 0.5);
      }
    }
  }
  .middle {
    width: 55%;
    border-left: 1px solid #c1c1c1;
    border-right: 1px solid #c1c1c1;
    background-color: rgba(255, 255, 255, 0.1);
    position: relative;
    .my-content {
      color: orange;
      font-size: 24px;
      display: flex;
      flex-direction: column;
      padding: 32px;
      text-indent: 2em;
      .my-content-info {
        margin-bottom: 16px;
        display: flex;
        justify-content: space-around;
        align-content: end;
        span {
          display: block;
          &.title {
            width: 30%;
            text-align: right;
          }
          &.value {
            width: 70%;
          }
        }
      }
    }
    img {
      width: 100%;
      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }
  .right {
    width: 20%;
  }
}

@keyframes move {
  0% {
    color: rgb(255, 255, 255);
    background-color: rgba(255, 255, 255, 0.1);
  }
  100% {
    color: skyblue;
    background-color: rgba(135, 206, 235, 0.5);
  }
}
</style>
