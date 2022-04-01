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
          <DailyChart chart-id="dailyChart" :chart-data="days0Data" />
        </div>
      </el-col>
      <el-col :span="3">
        <div class="bgs">
          <CommonCard :infoData="hsgData" />
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
          <MonthChart chart-id="monthChart" :chart-data="months0Data" />
        </div>
      </el-col>
      <el-col :span="3">
        <div class="bgs">
          <CommonCard :infoData="tsData" />
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
          <CommonCard :infoData="syData" />
        </div>
      </el-col>
      <el-col :span="3">
        <div class="bgs">
          <CommonCard :infoData="dgData" />
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          <TableList :table-data="tableData" />
        </div>
      </el-col>
      <el-col :span="3">
        <div class="bgs">
          <CommonCard :infoData="agvData" />
        </div>
      </el-col>
      <el-col :span="3">
        <div class="bgs">
          <CommonCard :infoData="logData" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CommonCard from "@/components/CommonCard";
import DailyChart from "@/components/DailyChart";
import MonthChart from "@/components/MonthChart";
import TableList from "@/components/TableList1";
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
        name: "衍架1",
        status: "联机",
        pattern: "自动",
        runStatus: "生产",
        state: 2,
        imgSrc: require("@/assets/yj1.png"),
      },
      yjData2: {
        name: "衍架2",
        status: "联机",
        pattern: "自动",
        runStatus: "生产",
        state: 1,
        imgSrc: require("@/assets/yj2.png"),
      },
      yjData3: {
        name: "衍架3",
        status: "联机",
        pattern: "自动",
        runStatus: "生产",
        state: 0,
        imgSrc: require("@/assets/yj1.png"),
      },
      yjData4: {
        name: "衍架4",
        status: "联机",
        pattern: "自动",
        runStatus: "生产",
        state: 3,
        imgSrc: require("@/assets/yj2.png"),
      },
      syData: {
        name: "试压",
        status: "联机",
        pattern: "自动",
        runStatus: "生产",
        state: 2,
        imgSrc: require("@/assets/syzz.png"),
      },
      dgData: {
        name: "地轨",
        status: "联机",
        pattern: "自动",
        runStatus: "生产",
        state: 1,
        imgSrc: require("@/assets/dg.png"),
      },
      hsgData: {
        name: "活塞杆清洗",
        status: "联机",
        pattern: "自动",
        runStatus: "生产",
        state: 0,
        imgSrc: require("@/assets/hsgqx.png"),
      },
      gtData: {
        name: "缸筒清洗",
        status: "联机",
        pattern: "自动",
        runStatus: "生产",
        state: 2,
        imgSrc: require("@/assets/gtqx.png"),
      },
      tsData: {
        name: "探伤",
        status: "联机",
        pattern: "自动",
        runStatus: "生产",
        state: 1,
        imgSrc: require("@/assets/ts.png"),
      },
      bzData: {
        name: "部装",
        status: "联机",
        pattern: "自动",
        runStatus: "生产",
        state: 3,
        imgSrc: require("@/assets/bz.png"),
      },
      agvData: {
        name: "AGV叫料",
        status: "联机",
        pattern: "自动",
        runStatus: "生产",
        state: 1,
        imgSrc: "",
      },
      logData: {
        name: "系统日志",
        status: "联机",
        pattern: "自动",
        runStatus: "生产",
        state: 1,
        imgSrc: "",
      },
      days0Data: {
        seriesData: [
          {
            name: "早班OK",
            type: "bar",
            stack: "Ad",
            barMaxWidth: 20,
            emphasis: {
              focus: "series",
            },
            data: [12, 32, 11, 14, 9, 20, 10],
          },
          {
            name: "早班NG",
            type: "bar",
            stack: "Ad",
            emphasis: {
              focus: "series",
            },
            data: [20, 18, 11, 24, 29, 30, 30],
          },
          {
            name: "晚班OK",
            type: "bar",
            stack: "Ad",
            emphasis: {
              focus: "series",
            },
            data: [15, 23, 21, 15, 10, 30, 16],
          },
          {
            name: "晚班NG",
            type: "bar",
            stack: "Ad",
            emphasis: {
              focus: "series",
            },
            data: [25, 13, 11, 25, 17, 20, 12],
          },
        ],
        xAxisData: [1, 2, 3, 4, 5, 6, 7],
      },
      months0Data: {
        seriesData: [
          {
            name: "OK",
            type: "bar",
            stack: "OK",
            barMaxWidth: 20,
            data: [
              2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4,
              3.3,
            ],
          },
          {
            name: "NG",
            type: "bar",
            stack: "OK",
            barMaxWidth: 20,
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0,
              2.3,
            ],
          },
        ],
        xAxisData: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
      },
      tableData: [
        {
          wipOrderNo: "34244", // 工单号
          productAlias: "W201B", // 成品简码
          quantity: "201B211341", // 物料号
          okValue: "5", // 开工时间
          ngValue: "55", // 完工时间
          serisNullValue: "85", // 总消耗
          scheduledStartDate: "2022-11-10 09:11", // 来料数量
          scheduledCompleteDate: "2022-11-10 09:11", // 完成数量
          cDiameter2: "56.33", // 订单状态
        },
      ],
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
