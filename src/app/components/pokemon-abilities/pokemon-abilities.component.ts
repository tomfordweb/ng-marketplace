import { Component, Input, OnInit } from "@angular/core";
import { PokemonAbility } from "src/app/interfaces/pokemon-ability.interface";
import { Pokemon } from "src/app/lib/pokemon/pokemon";

@Component({
  selector: "app-pokemon-abilities",
  template: `<h4 *ngIf="title">{{ title }}</h4>
    <ul>
      <li *ngFor="let ability of abilities">
        {{ ability.slot }} {{ ability.ability.name }}
      </li>
    </ul> `,
  styleUrls: ["./pokemon-abilities.component.scss"],
})
export class PokemonAbilitiesComponent implements OnInit {
  @Input() abilities: PokemonAbility[] = [];
  @Input() title: string | null = null;
  constructor() {}

  ngOnInit(): void {}
}
