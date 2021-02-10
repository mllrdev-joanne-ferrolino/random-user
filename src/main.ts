import dashboardModule from '@/home';

import { createApp } from 'vue';
import AppComponent from './app.vue';
import VueRouter, { RouteConfig } from 'vue-router';
import PrimeVue from 'primevue/config';

const routes: Array<RouteConfig> = [
	{
		path: '/',
		component: AppComponent,
	},
];

const router = new VueRouter({
	routes,
});

const app = createApp(AppComponent).use(PrimeVue);

dashboardModule({ app, router });

app.mount('#app');
