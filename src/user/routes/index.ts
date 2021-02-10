import { RouteNames } from '@/shared/constants/route-names';
import { RouteRecordRaw } from 'vue-router';

function loadView(view: string) {
  return () => import(/* webpackChunkName: "about" */ `../views/${view}.vue`);
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: RouteNames.USERS,
    component: loadView('users-page'),
  },
  {
    path: '/profile',
    name: RouteNames.PROFILE,
    component: loadView('profile-page'),
  },
];

export default routes;
