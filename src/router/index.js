import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from '@/layout'

const routes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'el-icon-s-home' }
    }]
  },
  {
    path: "/relationship",
    component: Layout,
    children: [{
      path: 'relationship',
      name: 'Relationship',
      component: () => import("@/views/relationship/index"),
      meta: { title: 'Relationship'}
    }]
  },
  {
    path: "/anchor",
    component: Layout,
    children: [{
      path: 'anchor',
      name: 'Anchor',
      component: () => import("@/views/anchor/index"),
      meta: { title: 'Anchor'}
    }]
  },
  {
    path: "/wordCloud",
    component: Layout,
    children: [{
      path: 'wordCloud',
      name: 'WordCloud',
      component: () => import("@/views/wordCloud/index"),
      meta: { title: 'WordCloud'}
    }]
  },
  {
    path: "/ringCharts",
    component: Layout,
    children: [{
      path: 'ring',
      name: 'Ring',
      component: () => import("@/views/ringCharts/index"),
      meta: { title: 'Ring'}
    }]
  }
];

//实例化VueRouter并将routes添加进去
const router = new Router({
  //ES6简写，等于routes：routes
  routes,
});

//抛出这个这个实例对象方便外部读取以及访问
export default router;
