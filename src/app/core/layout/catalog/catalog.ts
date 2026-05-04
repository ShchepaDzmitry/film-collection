import { Component, inject } from '@angular/core';
import { FilmCollection } from '../../../features/film-collection/film-collection';
import { Film } from '../../../features/film-collection/film';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-catalog',
  imports: [FilmCollection, FormsModule],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
})
export class Catalog {
  filmService = inject(Film);

  searchString = this.filmService.searchString;
  updateSearch = this.filmService.updateSearch;
}
