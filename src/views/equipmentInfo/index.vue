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
import { getDataStats } from "@/api/dashboard";
import BarChart from "@/components/BarChart.vue";

export default {
  name: "EquipmentInfo",
  components: {
    BarChart,
  },
  mounted() {
    console.log("env", process.env.VUE_APP_BASE_API);
    this.getDataStats();
  },
  methods: {
    getDataStats() {
      getDataStats({
        channel: 0,
        customer_year: 0,
      })
        .then((res) => {
          if (res.code === 200) {
            console.log(res);
          }
        })
        .catch(() => {})
        .finally(() => {});
    },
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
