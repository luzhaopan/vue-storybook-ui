<template>
  <div class="equipment-container">
    <div style="width: 90%; heigth: 100%">
      <BarChart chart-id="equipmentTask" :chart-data="chartData" />
    </div>
    <div style="margin-top: 130px; width: 10%">
      <div class="leng">
        <div style="width: 30px; height: 15px; background-color: #00cb51" />
        <div style="margin-left: 10px">作业</div>
      </div>
      <div class="leng">
        <div style="width: 30px; height: 15px; background-color: #dfbc13" />
        <div style="margin-left: 10px">待机</div>
      </div>
      <div class="leng">
        <div style="width: 30px; height: 15px; background-color: red" />
        <div style="margin-left: 10px">故障</div>
      </div>
      <div class="leng">
        <div style="width: 30px; height: 15px; background-color: #b2b1b1" />
        <div style="margin-left: 10px">关机</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getStatus } from "@/api/dashboard";
import BarChart from "./BarChart3.vue";

export default {
  name: "EquipmentInfo",
  components: {
    BarChart,
  },
  data() {
    return {
      task: { equipmentTask: [] },
      timer: null,
      chartData: { seriesData: [], yData: [], desData: [] },
    };
  },
  mounted() {
    this.getStatus();
    const n = 30; // 间隔每n秒请求一次数据
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
          const { status, data } = res;
          if (status === 200 && data.result) {
            const types1 = {
              1: { name: "作业", color: "#00cb51", equipmentStatus: 1 },
              2: { name: "待机", color: "#dfbc13", equipmentStatus: 2 },
              3: { name: "故障", color: "red", equipmentStatus: 3 },
              0: { name: "关机", color: "#b2b1b1", equipmentStatus: 0 },
            };
            this.task = data.result;
            const eqId = [];
            const eqArr = [];
            const des = [];
            const { equipmentTask = [] } = this.task;
            equipmentTask.forEach((item, index) => {
              eqId.push(item.equipmentName);
              let rate = 0;
              if (
                !item.astatus &&
                !item.bstatus &&
                !item.cstatus &&
                !item.dstatus
              ) {
                rate = 0;
              } else {
                let num =
                  item.astatus /
                  (item.astatus + item.bstatus + item.cstatus + item.dstatus);
                rate = num.toFixed(2);
              }
              des.push(
                `作业时间：${this.timeFilter(
                  item.astatus
                )}（作业率: ${rate}%）\xa0\xa0\xa0\xa0待机时间：${this.timeFilter(
                  item.bstatus
                )}\xa0\xa0\xa0\xa0故障时间：${this.timeFilter(
                  item.cstatus
                )}\xa0\xa0\xa0\xa0停机时间：${this.timeFilter(item.dstatus)}`
              );
              item.equipmentList.forEach((obj) => {
                let start = +new Date(obj.acqDateStart);
                let end = +new Date(obj.acqDateEnd);
                var duration = end - start;
                // var duration = 1000;
                eqArr.push({
                  id: item.id,
                  name: types1[obj.equipmentStatus].name,
                  value: [index, start, end, duration],
                  // value: [index, start, (end += duration), duration],
                  itemStyle: {
                    color: types1[obj.equipmentStatus].color,
                  },
                });
              });
            });
            this.chartData.seriesData = eqArr;
            this.chartData.yData = eqId;
            this.chartData.desData = des;
          }
        })
        .catch(() => {})
        .finally(() => {});
    },
    timeFilter(val) {
      if (!val) {
        return 0;
      } else {
        let hour =
          Math.floor(val / 3600) < 10
            ? "0" + Math.floor(val / 3600)
            : Math.floor(val / 3600) < 10;
        let minute =
          Math.floor((val - hour * 3600) / 60) < 10
            ? "0" + Math.floor((val - hour * 3600) / 60)
            : Math.floor((val - hour * 3600) / 60);
        // let second =
        //   val - hour * 3600 - minute * 60 < 10
        //     ? "0" + (val - hour * 3600 - minute * 60)
        //     : val - hour * 3600 - minute * 60;
        return hour + ":" + minute;
      }
    },
  },
};
</script>

<style>
.equipment-container {
  display: flex;
  width: 100%;
  height: 100%;
}
.leng {
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 5px;
}
</style>
