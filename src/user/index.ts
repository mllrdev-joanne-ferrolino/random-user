import { IModuleParams } from '@/models/IModuleParams';
import routes from './routes';

export default function userModule(moduleOptions: IModuleParams): void {
  const { router } = moduleOptions;
  routes.map(route => router.addRoute(route));
}
