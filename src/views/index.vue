<template>
  <div class="main-container">
    <Header title="活塞杆探伤集成岛TJHSGTS1X" />
    <!-- <div @click="getValue">222</div> -->
    <div class="menus">
      <div
        style="cursor: pointer"
        v-for="item in menu"
        :class="{ checked: value === item.id }"
        :key="item.id"
        @click="handleClick(item.id)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="contant">
      <Equipment v-if="value == 1" />
      <RealPro v-if="value == 2" />
      <ProductionInfo v-if="value == 3" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Equipment from "./equipmentInfo";
import RealPro from "./realProInfo";
import ProductionInfo from "./productionInfo";

export default {
  name: "Dashboard",
  components: { Header, Equipment, RealPro, ProductionInfo },
  mounted() {
    const n = 300; // 间隔n秒切换场景，这里是5分钟
    const time = n * 1000;
    this.timer = setInterval(() => {
      // if (this.value === 1) {
      //   this.value = 2;
      // } else {
      //   this.value = 1;
      // }
      if (this.value < 3) {
        this.value++;
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
        {
          id: 3,
          name: "生产追溯",
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
    handleClick(val) {
      this.value = val;
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
    color: #30a1fe;
    font-weight: 600;
  }
}
.contant {
  border: 1px solid #66a7ff;
  padding: 20px 10px;
  // height: 100%;
  flex: 1;
  overflow-y: auto;
}
::-webkit-scrollbar {
  width: 5px;
  height: 20px;
  background-color: #f5f5f5;
}
</style>
