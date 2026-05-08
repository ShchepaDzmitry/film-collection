import { Component, inject } from '@angular/core';
import { FilmCollection } from '../../../features/film-collection/film-collection';
import { Film } from '../../../features/film-collection/film';
import { FormsModule } from '@angular/forms';
import { Autofocus } from './autofocus';

@Component({
  selector: 'app-catalog',
  imports: [FilmCollection, FormsModule, Autofocus],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
})
export class Catalog {
  private readonly filmService = inject(Film);

  readonly searchString = this.filmService.searchString;
  updateSearch = this.filmService.updateSearch;
}
