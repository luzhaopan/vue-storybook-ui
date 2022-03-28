<template>
  <div class="main-container">
    <Production :pro-date="proDate" :pro-data="proData" />
  </div>
</template>

<script>
import { getProData } from "@/api/dashboard";
import Production from "@/components/ProductionInfo";
export default {
  name: "ProductInfo",
  components: { Production },
  data() {
    return {
      proDate: {
        date: "",
        total: 0,
      },
      proData: [],
      proData1: [
        {
          prodNo: "abc",
          prodId: "2022/3/15 15:30:00",
          prodCountTime: "00:16:00",
          prodList: [
            {
              eqname: "1",
              startTime: "2022/3/15 15:30:00",
              endTime: "2022/3/15 15:35:00",
              countTime: "00:05:00",
            },
            {
              eqname: "2",
              startTime: "2022/3/15 15:30:00",
              endTime: "2022/3/15 15:36:00",
              countTime: "00:06:00",
            },
            {
              eqname: "3",
              startTime: "2022/3/15 15:30:00",
              endTime: "2022/3/15 15:32:00",
              countTime: "00:02:00",
            },
            {
              eqname: "4",
              startTime: "2022/3/15 15:27:00",
              endTime: "2022/3/15 15:30:00",
              countTime: "00:03:00",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.getProData();
    const n = 30; // 间隔每n秒请求一次数据
    const time = n * 1000;
    this.timer = setInterval(() => {
      this.getProData();
    }, time);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    getProData() {
      getProData()
        .then((res) => {
          const { status, result } = res;
          if (status == 200 && result.task) {
            this.proData = result.task;
            this.proDate.total = result.prodcount;
          }
        })
        .catch(() => {})
        .finally(() => {});
    },
  },
};
</script>

<style>
.main-container {
  width: 100%;
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
