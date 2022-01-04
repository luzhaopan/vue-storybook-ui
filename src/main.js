import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/en"; // lang i18n
import router from "./router";
import * as echarts from "echarts";

Vue.use(ElementUI, { locale });
Vue.config.productionTip = false;

Vue.prototype.$echarts = echarts;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
