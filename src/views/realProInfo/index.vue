<template>
  <div class="main-container">
    <Header title="三米活塞杆一号岛生产实况" />
    <el-row class="line1" :gutter="10">
      <el-col :span="12">
        <div class="bgs">
          <div class="title">日产数据(6月)</div>
          <DailyChart chart-id="dailyChart1" :chart-data="{}" />
        </div>
      </el-col>
      <el-col :span="12">
        <div class="bgs">
          <div class="title">日产数据(11月)</div>
          <DailyChart chart-id="dailyChart2" :chart-data="{}" />
        </div>
      </el-col>
    </el-row>
    <el-row class="line1" :gutter="10">
      <el-col :span="12">
        <div class="bgs">
          <div class="title">月产数据</div>
          <MonthChart chart-id="monthChart1" :chart-data="{}" />
        </div>
      </el-col>
      <el-col :span="12">
        <div class="bgs">
          <div class="title">月产数据</div>
          <MonthChart chart-id="monthChart2" :chart-data="{}" />
        </div>
      </el-col>
    </el-row>
    <el-row class="line1" :gutter="10">
      <el-col :span="12"><TableList /></el-col>
      <el-col :span="12"><TableList /></el-col>
    </el-row>
  </div>
</template>

<script>
import Header from "@/components/Header";
import DailyChart from "@/components/DailyChart";
import MonthChart from "@/components/MonthChart";
import TableList from "@/components/TableList1";

export default {
  name: "ProductInfo",
  components: {
    Header,
    DailyChart,
    MonthChart,
    TableList,
  },
  data() {
    return {
      infoData1: {
        name: "M-900iB/280L实时信息",
        x: -1365.47,
        y: -1365.47,
        z: -1365.47,
        status: "联机",
        pattern: "自动",
        runStatus: "生产",
        speed: "100%",
        time: "20h 31min 23s",
        total: "19/2021",
      },
      infoData2: {
        name: "OP10车床实时信息",
        x: -1365.47,
        y: -1365.47,
        status: "联机",
        pattern: "自动",
        runStatus: "待机",
        mspeed: 0,
        speed: 0,
        total: "19/2235",
      },
      infoData3: {
        name: "OP20车床实时信息",
        x: -1365.47,
        y: -1365.47,
        status: "联机",
        pattern: "自动",
        runStatus: "待机",
        mspeed: 0,
        speed: 0,
        total: "19/2235",
      },
      infoData4: {
        name: "OP30车床实时信息",
        x: -1365.47,
        y: -1365.47,
        status: "联机",
        pattern: "自动",
        runStatus: "待机",
        mspeed: 0,
        speed: 0,
        total: "19/2235",
      },
    };
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
