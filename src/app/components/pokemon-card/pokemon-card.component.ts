import { Component, Input, OnInit } from "@angular/core";
import { PokemonRepresentation } from "src/app/interfaces/pokemon-representation.interface";
import { Pokemon } from "src/app/lib/pokemon/pokemon";

@Component({
  selector: "app-pokemon-card",
  template: `<figure *ngIf="!!pokemon">
    <a [routerLink]="['/pokemon', pokemon.name]">
      <img loading="lazy" src="https://via.placeholder.com/50" />

      <ng-content></ng-content>
    </a>
  </figure>`,
  styleUrls: ["./pokemon-card.component.scss"],
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: PokemonRepresentation | null = null;
  constructor() {}

  ngOnInit(): void {}
}
