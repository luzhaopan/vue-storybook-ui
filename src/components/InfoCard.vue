<template>
  <div class="infoCard">
    <div class="title">{{ infoData.name }}</div>
    <div class="item">实时位置：X：{{ infoData.x }}</div>
    <div class="item" style="padding-left: 60px">Y：{{ infoData.y }}</div>
    <div class="item" style="padding-left: 60px">Z：{{ infoData.z }}</div>
    <div class="item">连接状态：{{ infoData.status }}</div>
    <div class="item">操作模式：{{ infoData.pattern }}</div>
    <div class="item">运行状态：{{ infoData.runStatus }}</div>
    <div class="item">速度倍率：{{ infoData.speed }}</div>
    <div class="item">加工节拍：{{ infoData.time }}</div>
    <div class="item">今日数量/总数量：{{ infoData.total }} 个</div>
  </div>
</template>

<script>
export default {
  name: "InfoCard",
  props: {
    infoData: Object,
  },
};
</script>

<style scoped>
.infoCard {
  position: relative;
  /* border: 1px solid #eee;*/
  padding: 10px;
}
.title {
  font-size: 14px;
  font-weight: 600;
  background-color: rgb(216, 237, 255);
  text-align: center;
  padding: 5px 0;
}
.item {
  border-bottom: 1px solid #ddd;
  font-size: 12px;
  padding: 5px 0 2px;
  text-align: left;
}
</style>
