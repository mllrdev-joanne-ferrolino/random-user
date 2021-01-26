import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { RouteNames } from "@/router/route-names";

function loadView(view: string) {
  return () => import(/* webpackChunkName: "about" */ `../views/${view}.vue`);
}

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: RouteNames.USERS,
    component: loadView("UsersPage"),
  },
  {
    path: "/user/:name",
    name: RouteNames.PROFILE,
    component: loadView("ProfilePage"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
