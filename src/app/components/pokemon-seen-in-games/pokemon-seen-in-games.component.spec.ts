import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSeenInGamesComponent } from './pokemon-seen-in-games.component';

describe('PokemonSeenInGamesComponent', () => {
  let component: PokemonSeenInGamesComponent;
  let fixture: ComponentFixture<PokemonSeenInGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonSeenInGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonSeenInGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
