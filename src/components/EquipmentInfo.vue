<template>
  <div class="container">
    <div style="width: 80%">
      <BarChart />
    </div>
    <div style="margin-top: 130px; width: 20%">
      <div class="leng">
        <div style="width: 30px; height: 15px; background-color: green" />
        <div style="margin-left: 10px">作业</div>
      </div>
      <div class="leng">
        <div style="width: 30px; height: 15px; background-color: yellow" />
        <div style="margin-left: 10px">待机</div>
      </div>
      <div class="leng">
        <div style="width: 30px; height: 15px; background-color: red" />
        <div style="margin-left: 10px">故障</div>
      </div>
      <div class="leng">
        <div style="width: 30px; height: 15px; background-color: #d8d4d4" />
        <div style="margin-left: 10px">关机</div>
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from "./BarChart.vue";

export default {
  name: "EquipmentInfo",
  components: {
    BarChart,
  },
};
</script>

<style>
.container {
  display: flex;
}
.leng {
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 5px;
}
</style>
