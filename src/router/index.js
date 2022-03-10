import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
// import Layout from "../App.vue";
import Dashboard from "../views/index.vue";
import Equipment from "../views/equipmentInfo";
import Production from "../views/productionInfo";
import RealProduce from "../views/realProduce";
import RealProInfo from "../views/realProInfo";

const routes = [
  { path: "", redirect: "dashboard" },
  //单个路由均为对象类型，path代表的是路径，component代表组件
  { path: "/dashboard", component: Dashboard },
  { path: "/equipment", component: Equipment },
  { path: "/production", component: Production },
  { path: "/realProduce", component: RealProduce },
  { path: "/realProInfo", component: RealProInfo },
];

//实例化VueRouter并将routes添加进去
const router = new Router({
  //ES6简写，等于routes：routes
  routes,
});

//抛出这个这个实例对象方便外部读取以及访问
export default router;
