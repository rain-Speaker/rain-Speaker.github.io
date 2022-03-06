<template>
  <!-- 组件的结构 -->
  <div>
    <h3>学生姓名：{{ name }}</h3>
    <h3>学校年龄：{{ age }}</h3>
  </div>
</template>

<script>
// 组件交互相关的代码（数据、方法等）
export default {
  name: "Student",
  data() {
    return {
      name: "Tom",
      age: 18,
    };
  },
};
</script>

<style>
/* 组件的样式 */
</style>
