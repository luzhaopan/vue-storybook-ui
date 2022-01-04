<template>
  <div class="main-container">
    <Header title="三米活塞杆一号岛生产实况" />
    <el-row class="line1" :gutter="10">
      <el-col :span="4"><InfoCard :infoData="infoData1" /></el-col>
      <el-col :span="4"><InfoCar :infoData="infoData2" /></el-col>
      <el-col :span="12">
        <div class="title">日产数据(11月)</div>
        <DailyChart chart-id="dailyChart" :chart-data="{}" />
      </el-col>
      <el-col :span="4">
        <div class="title">当日设备产量分析</div>
        <BarChart1 chart-id="barChart1" :chart-data="{}" />
      </el-col>
    </el-row>
    <el-row class="line1" :gutter="10">
      <el-col :span="4"><InfoCar :infoData="infoData3" /></el-col>
      <el-col :span="4"><InfoCar :infoData="infoData4" /></el-col>
      <el-col :span="12">
        <div class="title">月产数据</div>
        <MonthChart chart-id="monthChart" :chart-data="{}" />
      </el-col>
      <el-col :span="4">
        <div><Card /></div>
        <div><Card /></div>
      </el-col>
    </el-row>
    <el-row class="line1">
      <el-col><TableList /></el-col>
    </el-row>
  </div>
</template>

<script>
import Header from "@/components/Header";
import InfoCard from "@/components/InfoCard";
import InfoCar from "@/components/InfoCar";
import DailyChart from "@/components/DailyChart";
import BarChart1 from "@/components/BarChart1";
import MonthChart from "@/components/MonthChart";
import Card from "@/components/Card";
import TableList from "@/components/TableList";
export default {
  name: "ProductInfo",
  components: {
    Header,
    InfoCard,
    InfoCar,
    DailyChart,
    BarChart1,
    MonthChart,
    Card,
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
.line1 {
  margin: 20px 0;
}
.title {
  font-size: 14px;
  font-weight: 600;
  background-color: rgb(216, 237, 255);
  text-align: center;
  padding: 5px 0;
}
</style>
