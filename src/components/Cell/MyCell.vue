<template>
  <div class="pro-container">
    <el-button type="primary">主要按钮</el-button>
    <el-row class="main">
      <el-col :span="4">当前生产数量：19</el-col>
      <el-col :span="20">生产追溯</el-col>
    </el-row>
    <div
      v-for="item in proInfo"
      :key="item.taskId"
      style="margin: 5px"
      class="list"
    >
      <div class="list-item" style="margin-right: 5px">
        <div class="task">
          <div class="taskNo">{{ item.taskNo }}</div>
          <div class="taskId">{{ item.taskId }}</div>
        </div>
        <div class="time">{{ item.taskTime ? item.taskTime : "--" }}</div>
      </div>
      <div class="list-item" v-for="(p, index) in item.children" :key="p.eqId">
        <div class="eq-card">
          <div style="width: 100%">
            <div
              :class="{
                items: true,
                active: p.startTime && !p.endTime,
                end: p.startTime && p.endTime,
                nowork: !p.startTime && !p.endTime,
              }"
            >
              <div class="eName">{{ p.eqName }}</div>
              <div class="ctext" style="margin: 5px 0">
                开始：{{ p.startTime }}
              </div>
              <div class="ctext">结束：{{ p.endTime ? p.endTime : "--" }}</div>
            </div>
            <div class="time">43分22秒</div>
          </div>
          <div class="arrow" v-if="index !== 5">
            <i class="el-icon-right"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyCell",
  components: {},
  data() {
    return {
      proInfo: [
        {
          taskNo: "1018621886235673600",
          taskId: "201821J1838CG",
          taskTime: null,
          children: [
            {
              eqName: "机床1加工",
              eqId: "32323",
              startTime: "2021-11-10 09:10:51",
              endTime: null,
            },
            {
              eqName: "机床2加工",
              eqId: "3233323",
              startTime: null,
              endTime: null,
            },
            {
              eqName: "磨床加工",
              eqId: "3232423",
              startTime: null,
              endTime: null,
            },
            {
              eqName: "清洗机",
              eqId: "32323599",
              startTime: null,
              endTime: null,
            },
            {
              eqName: "检测台",
              eqId: "39999",
              startTime: null,
              endTime: null,
            },
            {
              eqName: "小车",
              eqId: "3000044",
              startTime: null,
              endTime: null,
            },
          ],
        },
        {
          taskNo: "1018621886235666600",
          taskId: "201921J1838CG",
          taskTime: "43分3秒",
          children: [
            {
              eqName: "机床1加工",
              eqId: "3231",
              startTime: "2021-11-10 09:10:51",
              endTime: "2021-11-10 09:20:51",
            },
            {
              eqName: "机床2加工",
              eqId: "323523",
              startTime: "2021-11-10 09:10:51",
              endTime: null,
            },
            {
              eqName: "磨床加工",
              eqId: "32623",
              startTime: null,
              endTime: null,
            },
            {
              eqName: "清洗机",
              eqId: "327599",
              startTime: null,
              endTime: null,
            },
            {
              eqName: "检测台",
              eqId: "389",
              startTime: null,
              endTime: null,
            },
            {
              eqName: "小车",
              eqId: "300065044",
              startTime: null,
              endTime: null,
            },
          ],
        },
        {
          taskNo: "1418521886235666600",
          taskId: "201961J1838CG",
          taskTime: "55分33秒",
          children: [
            {
              eqName: "机床1加工",
              eqId: "32991",
              startTime: "2021-11-10 09:10:51",
              endTime: "2021-11-10 09:20:51",
            },
            {
              eqName: "机床2加工",
              eqId: "3235r23",
              startTime: "2021-11-10 09:10:51",
              endTime: "2021-11-10 09:20:51",
            },
            {
              eqName: "磨床加工",
              eqId: "326213",
              startTime: "2021-11-10 09:20:51",
              endTime: null,
            },
            {
              eqName: "清洗机",
              eqId: "3217599",
              startTime: null,
              endTime: null,
            },
            {
              eqName: "检测台",
              eqId: "3891",
              startTime: null,
              endTime: null,
            },
            {
              eqName: "小车",
              eqId: "3010065044",
              startTime: null,
              endTime: null,
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
.pro-container {
  padding: 10px;
  width: 100%;
}
.main {
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
  margin-bottom: 10px;
}
.list {
  display: flex;
  flex-wrap: wrap;
}
.list-item {
  flex: 1;
}
.eq-card {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  width: 100%;
}
.task {
  height: 70px;
  box-shadow: 5px 5px 10px #e8e8e8;
  border-radius: 5px;
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 30px;
}
.taskNo {
  font-size: 14px;
  font-weight: 600;
}
.taskId {
  font-size: 10px;
  color: rgb(143, 143, 143);
}
.card {
  display: flex;
  justify-content: center;
  align-items: center;
}
.items {
  padding: 10px 5px;
  text-align: left;
  border-radius: 5px;
  color: #fff;
  height: 70px;
}
.eName {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
}
.ctext {
  font-size: 8px;
  white-space: nowrap;
}
.arrow {
  width: 20px;
  height: 20px;
  background-color: #044c80;
  border: 1px solid #000;
  color: #fff;
  font-size: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 35px 2px 0;
}
.time {
  font-size: 12px;
}
.active {
  background-color: #0095ff;
}
.nowork {
  background-color: #a1a1a1;
}
.end {
  background-color: #01c067;
}
</style>
