import { Component, input } from '@angular/core';
import { IFilm } from '../models/film-model';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-film-card',
  imports: [RouterLink],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
})
export class FilmCard {
  film = input.required<IFilm>();
  faStar = faStar;

  toggleFavorite(event: Event) {
    event.stopPropagation();
    this.film().isFavorite = !this.film().isFavorite;
  }
}
