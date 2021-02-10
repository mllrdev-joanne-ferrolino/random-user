import { RouteConfig } from 'vue-router';
import RouteName from '@/shared/constants/route-name';

const routes: Array<RouteConfig> = [
	{
		path: '/home',
		name: RouteName.HOME,
		component: () =>
			import(/* webpackChunkName: "Home" */ '../views/home-page.vue'),
	},
];

export default routes;
