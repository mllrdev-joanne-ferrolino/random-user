import IModuleParams from '@/shared/interface/IModuleParams';
import routes from './routes';

export default function dashboardModule(moduleOptions: IModuleParams): void {
	const { router } = moduleOptions;
	routes.map(route => router.addRoute(route));
}
