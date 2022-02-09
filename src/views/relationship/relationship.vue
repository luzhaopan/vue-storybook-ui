<template>
  <div id="kg_container1">
    <el-input
      v-model="input"
      placeholder="请输入内容"
      style="width: 500px"
      @change="search"
    />
    <DemoGrape pid="kg_container1" :grape-data="grapeData" />
  </div>
</template>

<script>
import axios from "axios";
import DemoGrape from "./components/DemoGrape.vue";

export default {
  name: "Home",
  components: {
    DemoGrape,
  },
  data() {
    return {
      loading: false,
      input: "万科A",
      grapeData: [],
    };
  },
  created() {
    this.getData(this.$route.query.source);
  },
  methods: {
    getData() {
      this.loading = true;
      axios.get("/static/kgData4.json", {}).then((response) => {
        this.loading = false;
        this.grapeData = response.data.wanke;
      });
    },
    search(val) {
      this.loading = true;
      axios.get("/static/kgData4.json", {}).then((response) => {
        this.loading = false;
        if (val === "万科A") {
          this.grapeData = response.data.wanke;
        } else if (val === "中国平安") {
          this.grapeData = response.data.pingan;
        } else {
          this.grapeData = response.data.nanbo;
        }
      });
    },
  },
};
</script>
<style>
#kg_container1 {
  height: 100vh;
  width: 100%;
  background-color: rgb(18, 1, 34);
}
</style>
