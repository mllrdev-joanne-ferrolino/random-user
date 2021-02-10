import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './app.vue';

import '@/assets/styles/tailwind.css';
import '@/plugins/primevue';

import registerBaseComponents from '@/shared/base';
import { RouteNames } from '@/shared/constants/route-names';

import userModule from '@/user';

import PrimeVue from 'primevue/config';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: App,
      beforeEnter: (to, from, next) => {
        next({ name: RouteNames.USERS });
      },
    },
  ],
});

const app = createApp(App).use(PrimeVue);

userModule({ app, router });
app.use(router);
registerBaseComponents(app);
app.config.globalProperties.$routeName = RouteNames;
app.mount('#app');
