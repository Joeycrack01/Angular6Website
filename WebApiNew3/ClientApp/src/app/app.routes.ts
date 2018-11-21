import { Routes } from '@angular/router';
import { DashRoutes } from './admin/dash.router';
import { IndexRoutes } from './index/index.router';

export const routes: Routes = [...IndexRoutes, ...DashRoutes]
