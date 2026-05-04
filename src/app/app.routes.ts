import { Routes } from '@angular/router';
import { Catalog } from './core/layout/catalog/catalog';

export const routes: Routes = [
  {
    path: 'home',
    component: Catalog,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];
