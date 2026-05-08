import { Component, inject } from '@angular/core';
import { FilmService } from './film.service';
import { FilmCard } from './film-card/film-card';

@Component({
  selector: 'app-film-collection',
  imports: [FilmCard],
  templateUrl: './film-collection.html',
  styleUrl: './film-collection.scss',
})
export class FilmCollection {
  private readonly filmService = inject(FilmService);

  readonly films = this.filmService.filteredFilms;
}
