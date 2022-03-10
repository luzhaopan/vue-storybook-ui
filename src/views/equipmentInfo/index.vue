<template>
  <div class="equipment-task">
    <Equipment />
  </div>
</template>

<script>
import Equipment from "@/components/EquipmentInfo";

export default {
  name: "EquipmentTask",
  components: {
    Equipment,
  },
  data() {
    return {
      task: { equipmentTask: [] },
      timer: null,
      chartData: { seriesData: [], yData: [] },
    };
  },
  mounted() {
    // this.getStatus();
    // const n = 10; // 间隔每n秒请求一次数据
    // const time = n * 1000;
    // this.timer = setInterval(() => {
    //   this.getStatus();
    // }, time);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    // getStatus() {
    //   getStatus()
    //     .then((res) => {
    //       const { status, data } = res;
    //       if (status === 200 && data.result) {
    //         const types1 = {
    //           1: { name: "作业", color: "green", equipmentStatus: 1 },
    //           2: { name: "待机", color: "yellow", equipmentStatus: 2 },
    //           3: { name: "故障", color: "red", equipmentStatus: 3 },
    //           0: { name: "关机", color: "#d8d4d4", equipmentStatus: 0 },
    //         };
    //         this.task = data.result;
    //         // if (this.task.equipmentTask.length > 0) {
    //         //   this.task.equipmentTask.forEach((item) => {
    //         //     data.result.equipmentTask.forEach((obj) => {
    //         //       if (item.equipmentId === obj.equipmentId) {
    //         //         item.equipmentList.push(...obj.equipmentList);
    //         //       }
    //         //     });
    //         //   });
    //         // } else {
    //         //   this.task = data.result;
    //         // }
    //         const eqId = [];
    //         const eqArr = [];
    //         const { equipmentTask = [] } = this.task;
    //         equipmentTask.forEach((item, index) => {
    //           eqId.push(item.equipmentId);
    //           item.equipmentList.forEach((obj) => {
    //             let start = +new Date(obj.acqDateStart);
    //             let end = +new Date(obj.acqDateEnd);
    //             var duration = end - start;
    //             // console.log("duration", duration);
    //             // var duration = 1000;
    //             eqArr.push({
    //               id: item.equipmentId,
    //               name: types1[obj.equipmentStatus].name,
    //               value: [index, start, end, duration],
    //               // value: [index, start, (end += duration), duration],
    //               itemStyle: {
    //                 color: types1[obj.equipmentStatus].color,
    //               },
    //             });
    //           });
    //         });
    //         this.chartData.seriesData = eqArr;
    //         this.chartData.yData = eqId;
    //       }
    //     })
    //     .catch(() => {})
    //     .finally(() => {});
    // },
  },
};
</script>

<style lang="scss" scope>
.equipment-task {
  width: 100%;
  // height: calc(100vh - 80px);
  height: 100%;
  .detail {
    border: 1px solid #ddd;
    height: 100%;
    width: 100%;
    padding: 5px 10px 20px;
    background-color: #f8f8f8;
  }
  .sub-title {
    margin: 5px 0;
    font-size: 13px;
    font-weight: 600;
  }
}
</style>
