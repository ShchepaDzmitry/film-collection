import { TestBed } from '@angular/core/testing';

import { Film } from './film.service';

describe('Film', () => {
  let service: Film;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Film);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
