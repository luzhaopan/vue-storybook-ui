<template>
  <div class="pro-container">
    <div class="main">
      <div class="nums">当前生产数量：{{ proDate.total }}</div>
      <div class="name">生产追溯</div>
    </div>
    <div class="list">
      <div v-for="item in titles" :key="item.id" class="list-item titles">
        <div>{{ item.title }}</div>
      </div>
    </div>
    <div v-for="item in proData" :key="item.prodId" class="list">
      <div class="list-item">
        <div class="task">
          <div class="taskNo">{{ item.prodNo }}</div>
          <div class="taskId">{{ item.prodId }}</div>
          <div class="time">
            {{ item.prodCountTime ? item.prodCountTime : "--" }}
          </div>
        </div>
      </div>
      <div class="list-item" v-for="(p, index) in item.prodList" :key="index">
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
              <!-- <div class="eName">{{ p.eqName }}</div> -->
              <div class="ctext">{{ p.startTime || "--" }}</div>
              <div class="ctext">{{ p.endTime || "--" }}</div>
              <div class="ctext">{{ p.countTime || "--" }}</div>
            </div>
            <!-- <div class="time">43分22秒</div> -->
          </div>
          <!-- <div class="arrow" v-if="index !== 5">
            <i class="el-icon-right"></i>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductionInfo",
  props: {
    proData: {
      type: Array,
      default: () => [],
    },
    proDate: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      titles: [
        {
          id: "工件信息",
          title: "工件信息",
        },
        {
          id: "探伤",
          title: "探伤",
        },
        {
          id: "清洗",
          title: "清洗",
        },
        {
          id: "装配",
          title: "装配",
        },
        {
          id: "试压",
          title: "试压",
        },
      ],
    };
  },
};
</script>

<style scoped>
.pro-container {
  /* padding: 10px; */
  width: 100%;
}
.main {
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
  position: relative;
}
.name {
  margin-bottom: 10px;
  font-weight: 600;
}
.nums {
  position: absolute;
  left: 10px;
  font-size: 13px;
}
.titles {
  background: #f5f4f4;
  font-size: 13px;
  padding: 10px 0;
}
.list {
  display: flex;
  flex-wrap: wrap;
}
.list-item {
  flex: 1;
  border-right: 1px solid #fff;
  border-bottom: 1px solid #fff;
}
.eq-card {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  width: 100%;
}
.task {
  /* height: 70px; */
  /* box-shadow: 5px 5px 10px #e8e8e8; */
  /* border-radius: 5px; */
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 20px;
}
.taskNo {
  font-size: 14px;
  font-weight: 600;
}
.taskId {
  font-size: 12px;
  color: rgb(143, 143, 143);
}
.card {
  display: flex;
  justify-content: center;
  align-items: center;
}
.items {
  padding: 5px;
  line-height: 20px;
  color: #fff;
}

.ctext {
  font-size: 13px;
  white-space: nowrap;
  text-align: center;
}

.time {
  font-size: 13px;
}
.active {
  background-color: #0095ff;
}
.nowork {
  background-color: #b3b3b3;
}
.end {
  background-color: #04da76;
}
</style>
