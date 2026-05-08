import { Component, OnInit, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbsService } from './services/breadcrumbs';
import { Film } from '../../features/film-collection/film';

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.scss',
})
export class Breadcrumbs {
  breadcrumbsService = inject(BreadcrumbsService);
  filmService = inject(Film);
  url = this.breadcrumbsService.url as any;

  breadcrumbs = computed(() => {
    return this.url()
      .split('/')
      .filter(Boolean)
      .map((segment: string, i: number, arr: string[]) => {
        return {
          label: isNaN(+segment) ? segment : this.filmService.getFilm(segment)?.title,
          url: '/' + arr.slice(0, i + 1).join('/'),
        };
      });
  });
}
