import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAPokemonComponent } from './select-a-pokemon.component';

describe('SelectAPokemonComponent', () => {
  let component: SelectAPokemonComponent;
  let fixture: ComponentFixture<SelectAPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectAPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
