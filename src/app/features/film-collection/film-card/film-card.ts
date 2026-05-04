import { Component, input } from '@angular/core';
import { IFilm } from '../models/film-model';

@Component({
  selector: 'app-film-card',
  imports: [],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
})
export class FilmCard {
  film = input.required<IFilm>();
}
