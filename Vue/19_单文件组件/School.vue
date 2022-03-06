<template>
  <!-- 组件的结构 -->
  <div class="school">
    <h3>学校名称：{{ name }}</h3>
    <h3>学校地址：{{ address }}</h3>
    <button @click="showName">点击显示学校名称</button>
  </div>
</template>

<script>
// 组件交互相关的代码（数据、方法等）
export default {
  name: "School",
  data() {
    return {
      name: "Vue",
      address: "北京",
    };
  },
  methods: {
    showName() {
      alert(this.name);
    },
  },
};
</script>

<style>
/* 组件的样式 */
.school {
  background-color: orange;
}
</style>
