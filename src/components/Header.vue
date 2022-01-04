<template>
  <div class="header">
    <div>
      <img class="img" src="@/assets/lg.jpg" alt="" />
    </div>
    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
  },
};
</script>

<style scoped>
.header {
  position: relative;
}
.img {
  width: 100px;
  height: 30px;
  position: absolute;
  left: 10px;
}
.title {
  text-align: center;
  width: 100%;
  font-size: 18px;
  font-weight: 600;
}
</style>
