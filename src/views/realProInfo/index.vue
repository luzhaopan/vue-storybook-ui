<template>
  <div class="product-info">
    <el-row class="line1" :gutter="10">
      <el-col :span="12">
        <div class="bgs">
          <div class="title">（1820WJ10A0070）日产数据</div>
          <DailyChart chart-id="dailyChart1" :chart-data="days0Data" />
        </div>
      </el-col>
      <el-col :span="12">
        <div class="bgs">
          <div class="title">（1820WJ10A0071）日产数据</div>
          <DailyChart chart-id="dailyChart2" :chart-data="days1Data" />
        </div>
      </el-col>
    </el-row>
    <el-row class="line1" :gutter="10">
      <el-col :span="12">
        <div class="bgs">
          <div class="title">（1820WJ10A0070）月产数据</div>
          <MonthChart chart-id="monthChart1" :chart-data="months0Data" />
        </div>
      </el-col>
      <el-col :span="12">
        <div class="bgs">
          <div class="title">（1820WJ10A0071）月产数据</div>
          <MonthChart chart-id="monthChart2" :chart-data="months1Data" />
        </div>
      </el-col>
    </el-row>
    <el-row class="line1" :gutter="10">
      <el-col :span="12"><TableList :table-data="table0Data" /></el-col>
      <el-col :span="12"><TableList :table-data="table1Data" /></el-col>
    </el-row>
  </div>
</template>

<script>
import { getDaysData, getMonthsData, getTable } from "@/api/dashboard";
import DailyChart from "@/components/DailyChart";
import MonthChart from "@/components/MonthChart";
import TableList from "@/components/TableList1";
const dic = {
  早班OK: "okz",
  早班NG: "ngz",
  晚班OK: "okw",
  晚班NG: "ngw",
};
const dicM = {
  OK: "okz",
  NG: "ngz",
};
export default {
  name: "ProductInfo",
  components: {
    DailyChart,
    MonthChart,
    TableList,
  },
  mounted() {
    this.getData();
    const n = 30; // 间隔每n秒请求一次数据
    const time = n * 1000;
    this.timer = setInterval(() => {
      this.getData();
    }, time);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  data() {
    return {
      days0Data: {
        seriesData: [],
        xAxisData: [],
      },
      days1Data: {
        seriesData: [],
        xAxisData: [],
      },
      months0Data: {
        seriesData: [],
        xAxisData: [],
      },
      months1Data: {
        seriesData: [],
        xAxisData: [],
      },
      table0Data: [],
      table1Data: [],
    };
  },
  methods: {
    getData() {
      this.getDaysData({ workstation: "1820WJ10A0070" });
      this.getDaysData({ workstation: "1820WJ10A0071" });
      this.getMonthsData({ workstation: "1820WJ10A0070" });
      this.getMonthsData({ workstation: "1820WJ10A0071" });
      this.getTable({ workstation: "1820WJ10A0070" });
      this.getTable({ workstation: "1820WJ10A0071" });
    },
    // 日产数据
    getDaysData(obj) {
      getDaysData(obj)
        .then((res) => {
          const { status, data } = res;
          if (status === 200 && data.result) {
            const nameArr1 = ["早班OK", "早班NG"];
            const nameArr2 = ["晚班OK", "晚班NG"];
            if (obj.workstation === "1820WJ10A0070") {
              if (data.result.data) {
                // const name = Object.keys(data.result.data);
                const arr1 = [];
                const arr2 = [];
                nameArr1.forEach((item) => {
                  arr1.push({
                    name: item,
                    type: "bar",
                    stack: "one",
                    barWidth: 10,
                    emphasis: {
                      focus: "series",
                    },
                    data: data.result.data[dic[item]],
                  });
                });
                nameArr2.forEach((item) => {
                  arr2.push({
                    name: item,
                    type: "bar",
                    stack: "two",
                    barWidth: 10,
                    // barMinWidth: 10,
                    // barMaxWidth: 10,
                    emphasis: {
                      focus: "series",
                    },
                    data: data.result.data[dic[item]],
                  });
                });
                this.days0Data.xAxisData = data.result.data["xAxis"];
                this.days0Data.seriesData = [...arr1, ...arr2];
              }
            } else {
              if (data.result.data) {
                const arr1 = [];
                const arr2 = [];
                nameArr1.forEach((item) => {
                  arr1.push({
                    name: item,
                    type: "bar",
                    stack: "one",
                    barWidth: 10,
                    emphasis: {
                      focus: "series",
                    },
                    data: data.result.data[dic[item]],
                  });
                });
                nameArr2.forEach((item) => {
                  arr2.push({
                    name: item,
                    type: "bar",
                    stack: "two",
                    barWidth: 10,
                    emphasis: {
                      focus: "series",
                    },
                    data: data.result.data[dic[item]],
                  });
                });
                this.days1Data.xAxisData = data.result.data["xAxis"];
                this.days1Data.seriesData = [...arr1, ...arr2];
              }
            }
          }
        })
        .catch(() => {})
        .finally(() => {});
    },
    // 月产数据
    getMonthsData(obj) {
      getMonthsData(obj)
        .then((res) => {
          const { status, data } = res;
          if (status === 200 && data.result) {
            const nameArr = ["OK", "NG"];
            if (obj.workstation === "1820WJ10A0070") {
              if (data.result.data) {
                // const name = Object.keys(data.result.data);
                const arr = [];
                nameArr.forEach((item) => {
                  arr.push({
                    name: item,
                    type: "bar",
                    stack: "OK",
                    barMaxWidth: 20,
                    data: data.result.data[dicM[item]],
                  });
                });
                this.months0Data.xAxisData = data.result.data["xAxis"];
                this.months0Data.seriesData = arr;
              }
            } else {
              if (data.result.data) {
                const arr = [];
                nameArr.forEach((item) => {
                  arr.push({
                    name: item,
                    type: "bar",
                    stack: "OK",
                    barMaxWidth: 20,
                    data: data.result.data[dicM[item]],
                  });
                });
                this.months1Data.xAxisData = data.result.data["xAxis"];
                this.months1Data.seriesData = arr;
              }
            }
          }
        })
        .catch(() => {})
        .finally(() => {});
    },
    // 看板表格数据
    getTable(obj) {
      getTable(obj)
        .then((res) => {
          const { status, data } = res;
          if (status === 200 && data.result) {
            if (obj.workstation === "1820WJ10A0070") {
              this.table0Data = data.result.tabaleData;
            } else {
              this.table1Data = data.result.tabaleData;
            }
          }
        })
        .catch(() => {})
        .finally(() => {});
    },
  },
};
</script>

<style lang="scss" scoped>
.product-info {
  width: 100%;
  // height: 100%;
  .bgs {
    padding: 10px;
    background-size: 100% 100%;
    background-image: url("~@/assets/border.jpg");
  }
  .line1 {
    margin: 20px 0;
  }
  .title {
    font-size: 14px;
    font-weight: 600;
    background-color: rgb(216, 237, 255);
    text-align: center;
    padding: 5px 0;

    background: linear-gradient(-118deg, transparent 6px, #d8edff 0) right,
      linear-gradient(124deg, transparent 9px, #d8edff 0) left;
    background-size: 60% 100%;
    background-repeat: no-repeat;
  }
}
</style>
