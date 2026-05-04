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
  {
    path: 'home/:id',
    loadComponent: () =>
      import('../app/features/film-collection/film-details/film-details').then(
        (m) => m.FilmDetails
      ),
  },
  {
    path: '**',
    loadComponent: () => import('../app/shared/not-found/not-found').then((m) => m.NotFound),
  },
];
