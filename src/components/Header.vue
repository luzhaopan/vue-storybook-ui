<template>
  <div class="header">
    <div align="center">
  
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
   background-image: url("~@/assets/logo2.png");
    
   background-size:100% 100%;
  position: relative;
  padding: 31px 0px;
}
.img {
  width: 100%;
  height: 60px;
 /* position: absolute;*/
  left: 0px;
}
.title {
  text-align: center;
  width: 100%;
  font-size: 18px;
  font-weight: 600;
}
</style>
