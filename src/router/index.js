import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
// import Layout from "../App.vue";
import equipment from "../views/equipmentInfo";
import production from "../views/productionInfo";

const routes = [
  { path: "", redirect: "equipment" },
  //单个路由均为对象类型，path代表的是路径，component代表组件
  { path: "/equipment", component: equipment },
  { path: "/production", component: production },
];

//实例化VueRouter并将routes添加进去
const router = new Router({
  //ES6简写，等于routes：routes
  routes,
});

//抛出这个这个实例对象方便外部读取以及访问
export default router;
