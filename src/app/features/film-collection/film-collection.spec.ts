import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmCollection } from './film-collection';

describe('FilmCollection', () => {
  let component: FilmCollection;
  let fixture: ComponentFixture<FilmCollection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmCollection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmCollection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
