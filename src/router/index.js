import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/table",
    name: "Table",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Table.vue"),
  },
  {
    path: "/personalCenter",
    name: "PersonalCenter",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PersonalCenter.vue"),
  },
  {
    path: "/practise",
    name: "Practise",
    component: () => import("../views/Practise.vue"),
    children: [
      {
        path: "normal",
        component: () => import("../views/practise/Normal.vue"),
      },
      {
        path: "fast",
        component: () => import("../views/practise/Fast.vue"),
      },
      {
        path: "zen",
        component: () => import("../views/practise/Zen.vue"),
      },
      {
        path: "review",
        component: () => import("../views/practise/Review.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
