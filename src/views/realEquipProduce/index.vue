<template>
  <div class="main-container">
    <el-row class="line1" :gutter="20">
      <el-col :span="3">
        <div class="bgs">
          <CommonCard :infoData="yjData1" />
        </div>
      </el-col>
      <el-col :span="3">
        <div class="bgs">
          <CommonCard :infoData="yjData2" />
        </div>
      </el-col>
      <el-col :span="12">
        <div class="bgs">
          <div class="title">日产数据</div>
          <DailyChart chart-id="dailyChart" :chart-data="daysData" />
        </div>
      </el-col>
      <el-col :span="3">
        <div class="bgs">
          <CommonCard :infoData="tsData" />
        </div>
      </el-col>
      <el-col :span="3">
        <div class="bgs">
          <CommonCard :infoData="gtData" />
        </div>
      </el-col>
    </el-row>
    <el-row class="line1" :gutter="20">
      <el-col :span="3">
        <div class="bgs">
          <CommonCard :infoData="yjData3" />
        </div>
      </el-col>
      <el-col :span="3">
        <div class="bgs">
          <CommonCard :infoData="yjData4" />
        </div>
      </el-col>
      <el-col :span="12">
        <div class="bgs">
          <div class="title">月产数据</div>
          <MonthChart chart-id="monthChart" :chart-data="monthsData" />
        </div>
      </el-col>
      <el-col :span="3">
        <div class="bgs">
          <CommonCard :infoData="hsgData" />
        </div>
      </el-col>
      <el-col :span="3">
        <div class="bgs">
          <CommonCard :infoData="bzData" />
        </div>
      </el-col>
    </el-row>
    <el-row class="line1" :gutter="20">
      <el-col :span="3">
        <div class="bgs">
          <CommonCard :infoData="dgData" />
        </div>
      </el-col>
      <el-col :span="3">
        <div class="bgs">
          <CommonCard :infoData="agvData" />
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          <TableList :table-data="tableData" />
        </div>
      </el-col>
      <el-col :span="3">
        <div class="bgs">
          <CommonCard :infoData="zzData" />
        </div>
      </el-col>
      <el-col :span="3">
        <div class="bgs">
          <CommonCard :infoData="syData" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getDaysData1, getMonthsData1, getTable, getStatusOne } from "@/api/dashboard";
import CommonCard from "@/components/CommonCard";
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
    CommonCard,
    DailyChart,
    MonthChart,
    TableList,
  },
  data() {
    return {
      yjData1: {
        imgSrc: require("@/assets/yj1.png"),
      },
      yjData2: {
        imgSrc: require("@/assets/yj2.png"),
      },
      yjData3: {
        imgSrc: require("@/assets/yj1.png"),
      },
      yjData4: {
        imgSrc: require("@/assets/yj2.png"),
      },
      syData: {
        imgSrc: require("@/assets/syzz.png"),
      },
      dgData: {
        imgSrc: require("@/assets/dg.png"),
      },
      hsgData: {
        imgSrc: require("@/assets/hsgqx.png"),
      },
      gtData: {
        imgSrc: require("@/assets/gtqx.png"),
      },
      tsData: {
        imgSrc: require("@/assets/ts.png"),
      },
      bzData: {
        imgSrc: require("@/assets/bz.png"),
      },
      zzData: {
        imgSrc: require("@/assets/bz.png"),
      },
      agvData: {
        equipmentName: 'AGV叫料',
        imgSrc: "",
      },
      logData: {
        imgSrc: "",
      },
      daysData: {
        seriesData: [],
        xAxisData: [],
      },
      monthsData: {
        seriesData: [],
        xAxisData: [],
      },
      tableData: [],
      equipmentNameList: []
    };
  },
  mounted() {
    this.getData();
    const n = 30; // 间隔每n秒请求一次数据
    const time = n * 1000;
    this.timer = setInterval(() => {
      this.getData();
    }, time);
  },
  methods: {
    getData() {
      this.getStatusOne();
      this.getDaysData();
      this.getMonthsData();
      this.getTable();
    },
    getStatusOne(){
      getStatusOne()
        .then((res) => {
          const { status, data } = res;
          if (status === 200 && data.result) {
             console.log(data.result)
            if (data.result.equipmentTask.length) {
              const { equipmentTask } = data.result
              const objData = {}
              equipmentTask.forEach(item => {
                objData[item.sn] = item
                this.equipmentNameList.push(item.equipmentName)
              })
              this.yjData1 = { ...this.yjData1, ...objData['1']}
              this.yjData2 = { ...this.yjData2, ...objData['2']}
              this.yjData3 = { ...this.yjData3, ...objData['5']}
              this.yjData4 = { ...this.yjData4, ...objData['6']}
              this.syData = { ...this.syData, ...objData['11']}
              this.agvData = { ...this.agvData, ...objData['AGV叫料']}
              this.dgData = { ...this.dgData, ...objData['9']}
              this.hsgData = { ...this.hsgData, ...objData['7']}
              this.gtData = { ...this.gtData, ...objData['4']}
              this.tsData = { ...this.tsData, ...objData['3']}
              this.bzData = { ...this.bzData, ...objData['8']}
              this.zzData = { ...this.zzData, ...objData['10']}
            }
          }
        })
        .catch(() => {})
        .finally(() => {});
    },
    // 日产数据
    getDaysData() {
      getDaysData1()
        .then((res) => {
          const { status, data } = res;
          if (status === 200 && data.result) {
            const nameArr1 = ["早班OK", "早班NG"];
            const nameArr2 = ["晚班OK", "晚班NG"];
            if (data.result.data) {
              const arr1 = [];
              const arr2 = [];
              nameArr1.forEach((item) => {
                arr1.push({
                  name: item,
                  type: "bar",
                  stack: "one",
                  barMinWidth : 15,
                  barMaxWidth : 20,
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
                  barMinWidth : 15,
                  barMaxWidth : 20,
                  emphasis: {
                    focus: "series",
                  },
                  data: data.result.data[dic[item]],
                });
              });
              this.daysData.xAxisData = data.result.data["xAxis"];
              this.daysData.seriesData = [...arr1, ...arr2];
            }
          }
        })
        .catch(() => {})
        .finally(() => {});
    },
    // 月产数据
    getMonthsData() {
      getMonthsData1()
        .then((res) => {
          const { status, data } = res;
          if (status === 200 && data.result) {
            const nameArr = ["OK", "NG"];
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
              this.monthsData.xAxisData = data.result.data["xAxis"];
              this.monthsData.seriesData = arr;
            }
          }
        })
        .catch(() => {})
        .finally(() => {});
    },
    // 看板表格数据
    getTable() {
      getTable()
        .then((res) => {
          const { status, data } = res;
          if (status === 200 && data.result) {
            this.tableData = data.result.tabaleData;
          }
        })
        .catch(() => {})
        .finally(() => {});
    },
  },
};
</script>

<style scoped>
.main-container {
  /* padding: 10px; */
  width: 100%;
}
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
</style>
