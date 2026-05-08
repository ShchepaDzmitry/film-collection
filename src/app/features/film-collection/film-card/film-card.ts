import { Component, inject, input } from '@angular/core';
import { IFilm } from '../models/film-model';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-film-card',
  imports: [RouterLink],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
})
export class FilmCard {
  film = input.required<IFilm>();
  filmService = inject(FilmService);
  faStar = faStar;

  toggleFavorite(event: Event, film: IFilm) {
    console.log(film);
    this.filmService.toggleFavorite(event, film);
  }
}
