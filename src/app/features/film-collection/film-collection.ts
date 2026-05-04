import { Component, inject } from '@angular/core';
import { Film } from './film';
import { FilmCard } from './film-card/film-card';

@Component({
  selector: 'app-film-collection',
  imports: [FilmCard],
  templateUrl: './film-collection.html',
  styleUrl: './film-collection.scss',
})
export class FilmCollection {
  private readonly filmService = inject(Film);

  readonly films = this.filmService.filteredFilms;
}
