import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

function loadView(view: string) {
  return () => import(/* webpackChunkName: "about" */ `../views/${view}.vue`);
}

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "UsersPage",
    component: loadView("UsersPage"),
  },
  {
    path: "/user/:name",
    name: "ProfilePage",
    component: loadView("ProfilePage"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
