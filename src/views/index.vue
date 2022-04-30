<template>
  <div class="main-container">
    <Header background-image="@/assets/logo2.png" title=" " />
   
    <!-- <div @click="getValue">222</div> -->
      <div style=" height:10px" > </div>
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
      <div v-if="value == 2">
        <RealPro v-if="type == '1'" />
        <RealEquipProduce v-else />
      </div>
      <ProductionInfo v-if="value == 3" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Equipment from "./equipmentInfo";
import RealPro from "./realProInfo";
import ProductionInfo from "./productionInfo";
import RealEquipProduce from "./realEquipProduce";

export default {
  name: "Dashboard",
  components: { Header, Equipment, RealPro, ProductionInfo, RealEquipProduce },
  mounted() {
    let url = window.location.href;
    if(url.indexOf('?') != -1){
      let obj = {};
      let arr = url.slice(url.indexOf('?')+1).split('&');
      arr.forEach(item => {
          let param = item.split('=');
          obj[param[0]] = param[1];
      })
      this.type = obj['select']
    }
    const n = 1; // 间隔n分钟切换场景，这里是1分钟
    const time = n * 60 * 1000;
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
      type: '1',
      menu: [
   
        {
          id: 2,
          name: "生产实况看板",
        },
        {
          id: 1,
          name: "设备用时分析",
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
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
}
.menus {
  display: flex;
  justify-content: flex-start;
  align-content: center;
  font-size: 14px;
 

  div {
    border-right: 10px solid #04041a;
    border:5px  ;
    padding: 4px 12px;
    background-image: url("~@/assets/menu1.png");
    background-size:100% 100%;
    width:120px;
  }
  .checked {
    color: #eeeeee;
    font-weight: 600;
  }
}
.contant {
  border: 1px solid #071f34;
  padding: 1px 1px;
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
