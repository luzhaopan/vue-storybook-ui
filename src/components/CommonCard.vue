<template>
  <div class="infoCard">
    <div class="title">{{ infoData.equipmentName || "暂无数据" }}</div>
    <div style="text-align: right; margin: 0px -4px -5px">
      <img class="img1" :src="getSrc(infoData.equipmentStatus)" alt="" />
    </div>
    <div class="item">连接状态：{{ connectDic[infoData.equipmentStatus] }}</div>
    <div class="item">操作模式：自动</div>
    <div class="item">运行状态：{{ runDic[infoData.equipmentStatus] }}</div>
    <img v-if="infoData.imgSrc" class="img2" :src="infoData.imgSrc" alt="" />
  </div>
</template>

<script>
// equipmentStatus 0 关机  123 联机
// 运行状态  equipmentStatus 0关机 1作业 2 待机 3报警
export default {
  name: "InfoCard",
  props: {
    infoData: Object,
  },
  data() {
    return {
      src0: require("@/assets/bj0.png"),
      src1: require("@/assets/bj1.png"),
      src2: require("@/assets/bj2.png"),
      src3: require("@/assets/bj3.png"),
      connectDic: {
        0: "关机",
        1: "联机",
        2: "联机",
        3: "联机",
      },
      runDic: {
        0: "关机",
        1: "作业",
        2: "待机",
        3: "报警",
      },
    };
  },
  methods: {
    getSrc(val) {
      switch (val) {
        case 0:
          return this.src0;
        case 1:
          return this.src1;
        case 2:
          return this.src2;
        case 3:
          return this.src3;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.infoCard {
  position: relative;
  /* border: 1px solid #eee;*/
  padding: 0 5px 30px;
  /* text-align: center; */
  height: 130px;
}
.title {
  margin-bottom: 5px;
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
.item {
  /* border-bottom: 1px solid #ddd; */
  font-size: 12px;
  padding: 5px 0 2px;
  text-align: left;
}
.img1 {
  width: 20px;
  height: 20px;
}
.img2 {
  width: 100px;
  height: 60px;
  position: absolute;
  right: -20px;
  top: 125px;
}
</style>
