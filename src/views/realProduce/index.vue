<template>
  <div class="main-container">
    <Header title="三米活塞杆一号岛生产实况" />
    <el-row class="line1" :gutter="10">
      <el-col :span="4"><InfoCard :infoData="infoData1" /></el-col>
      <el-col :span="4"><InfoCar :infoData="infoData2" /></el-col>
      <el-col :span="12">3</el-col>
      <el-col :span="4">4</el-col>
    </el-row>
  </div>
</template>

<script>
import Header from "@/components/Header";
import InfoCard from "@/components/InfoCard";
import InfoCar from "@/components/InfoCar";
export default {
  name: "ProductInfo",
  components: { Header, InfoCard, InfoCar },
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
</style>
