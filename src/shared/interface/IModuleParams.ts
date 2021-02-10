import { App } from 'vue';
import VueRouter from 'vue-router';

export default interface IModuleParams {
	app: App<Element>;
	router: VueRouter;
}
