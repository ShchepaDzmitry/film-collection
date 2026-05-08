import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs/operators';
import { FilmService } from '../film.service';
import { DurationPipe } from '../pipes/duration-pipe';

@Component({
  selector: 'app-film-details',
  imports: [RouterLink, DurationPipe],
  templateUrl: './film-details.html',
  styleUrl: './film-details.scss',
})
export class FilmDetails {
  private route = inject(ActivatedRoute);
  private filmService = inject(FilmService);

  filmId = toSignal(this.route.paramMap.pipe(map((params) => params.get('id') ?? '')), {
    initialValue: '',
  });

  film = computed(() => {
    const id = this.filmId();
    return this.filmService.getFilm(id);
  });
}
