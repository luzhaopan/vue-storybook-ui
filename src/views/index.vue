<template>
  <div class="main-container">
    <Header title="活塞杆探伤集成岛TJHSGTS1X" />
    <!-- <div @click="getValue">222</div> -->
    <div class="menus">
      <div
        v-for="item in menu"
        :class="{ checked: value === item.id }"
        :key="item.id"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="contant">
      <Equipment v-if="value === 1" />
      <RealPro v-if="value === 2" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Equipment from "./equipmentInfo";
import RealPro from "./realProInfo";

export default {
  name: "Dashboard",
  components: { Header, Equipment, RealPro },
  mounted() {
    const n = 300; // 间隔n秒切换场景，这里是5分钟
    const time = n * 1000;
    this.timer = setInterval(() => {
      if (this.value === 1) {
        this.value = 2;
      } else {
        this.value = 1;
      }
    }, time);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  data() {
    return {
      value: 2,
      menu: [
        {
          id: 1,
          name: "设备用时分析",
        },
        {
          id: 2,
          name: "生产实况看板",
        },
      ],
    };
  },
  methods: {
    getValue() {
      if (this.value === 1) {
        this.value = 2;
      } else {
        this.value = 1;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  /* padding: 10px; */
  width: 100%;
  height: calc(100vh - 20px);
  display: flex;
  flex-direction: column;
}
.menus {
  display: flex;
  justify-content: flex-start;
  align-content: center;
  font-size: 14px;
  background: #eaf4fd;
  div {
    border-right: 1px solid #ccc;
    padding: 4px 12px;
  }
  .checked {
    color: #4b95fb;
  }
}
.contant {
  border: 1px solid #66a7ff;
  padding: 20px 10px;
  // height: 100%;
  flex: 1;
  overflow-y: auto;
}
// .real {
//   width: 100%;
//   height: 100%;
// }
/* ::v-deep .el-tabs__content {
  padding: 0 15px;
} */
// ::-webkit-scrollbar {
//   display: none;
// }
::-webkit-scrollbar {
  width: 5px;
  height: 20px;
  background-color: #f5f5f5;
}
</style>
