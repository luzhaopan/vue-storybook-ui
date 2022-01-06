<template>
  <div class="container">
    <div style="width: 80%">
      <BarChart chart-id="equipmentTask" :chart-data="equipmentTask" />
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
import { getStatus } from "@/api/dashboard";
import BarChart from "@/components/BarChart3.vue";

export default {
  name: "EquipmentInfo",
  components: {
    BarChart,
  },
  data() {
    return {
      equipmentTask: {},
      timer: null,
    };
  },
  mounted() {
    const n = 1; // 间隔每n秒请求一次数据
    const time = n * 1000;
    this.timer = setInterval(() => {
      this.getStatus();
    }, time);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    getStatus() {
      getStatus()
        .then((res) => {
          if (res.status === 200) {
            this.equipmentTask = res.data.result;
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
