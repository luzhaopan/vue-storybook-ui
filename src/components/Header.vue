<template>
  <div class="header">
    <div>
      <img class="img" src="@/assets/sany.png" alt="" />
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
  padding: 10px 20px;
}
.img {
  width: 85px;
  height: 20px;
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
