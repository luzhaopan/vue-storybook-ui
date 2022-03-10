<template>
  <div class="main-container">
    <Header title="三米活塞杆一号岛生产实况" />
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
    <div class="mcont">
      <div v-if="value === 1" class="real">
        <Equipment />
      </div>
      <div v-if="value === 2" class="real">
        <RealPro />
      </div>
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
    const n = 300; // 间隔每n秒请求一次数据
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
      value: 1,
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
  height: 100%;
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
.mcont {
  border: 1px solid #eaf4fd;
  padding: 0 10px;
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
