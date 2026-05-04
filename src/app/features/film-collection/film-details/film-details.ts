import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';
import { Film } from '../film';
import { IFilm } from '../models/film-model';

@Component({
  selector: 'app-film-details',
  imports: [],
  templateUrl: './film-details.html',
  styleUrl: './film-details.scss',
})
export class FilmDetails {
  private route = inject(ActivatedRoute);
  private filmService = inject(Film);

  filmId = toSignal(this.route.paramMap.pipe(map((params) => params.get('id') ?? '')), {
    initialValue: '',
  });

  film = computed(() => {
    const id = this.filmId();
    return this.filmService.getFilm(id);
  });
}
