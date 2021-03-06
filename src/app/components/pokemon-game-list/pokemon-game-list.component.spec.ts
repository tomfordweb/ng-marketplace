import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonGameListComponent } from './pokemon-game-list.component';

describe('PokemonGameListComponent', () => {
  let component: PokemonGameListComponent;
  let fixture: ComponentFixture<PokemonGameListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonGameListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonGameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
