// 页面内使用 definePageMeta({layout: 'main'}) 会失效
const reRouter = [
  {
    path: "/",
    name: "index",
    component: () => import("../pages/index.vue"),
  },
  {
    path: "/cdom/:id",
    name: "Mine",
    component: () => import("../pages/cdom/index.vue"),
    meta: {
      layout: "pta", // 通过此种方式使用 自定义布局
      middleware: ["02.my-middleware"],
    },
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../pages/home/index.vue"),
  },
];
export default {
  routes: (_routes: any) => [...reRouter],
};
