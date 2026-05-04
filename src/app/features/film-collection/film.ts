import { Injectable, computed, signal } from '@angular/core';
import films from '../../../../public/data/films.json';
import { IFilm } from './models/film-model';

@Injectable({
  providedIn: 'root',
})
export class Film {
  private readonly _films = signal<IFilm[]>(films);
  private readonly _searchString = signal('');

  readonly films = this._films.asReadonly();
  readonly searchString = this._searchString.asReadonly();

  readonly filteredFilms = computed(() => {
    let searchString = this._searchString().toLowerCase().trim();

    if (!searchString) return this._films();

    const filteredFilms = this._films().filter((film: IFilm) => {
      return film.title.toLowerCase().includes(searchString);
    });

    return filteredFilms;
  });

  readonly favoriteFilms = computed(() => this._films().filter((film: IFilm) => film.isFavorite));

  updateSearch = (value: string) => {
    this._searchString.set(value);
  };

  getFilm(id: string) {
    return this._films().find((el: IFilm) => el.id.toString() === id);
  }
}
