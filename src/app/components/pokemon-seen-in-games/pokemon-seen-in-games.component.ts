import { Component, Input, OnInit } from "@angular/core";
import { PokemonGameIndex } from "src/app/interfaces/pokemon-game-index.interface";

@Component({
  selector: "app-pokemon-seen-in-games",
  template: `<ul>
    <li *ngFor="let game of games">
      <strong>#{{ game.game_index }}</strong
      ><a [routerLink]="['/pokedex', game.version.name]">
        {{ game.version.name }}</a
      >
    </li>
  </ul>`,
  styleUrls: ["./pokemon-seen-in-games.component.scss"],
})
export class PokemonSeenInGamesComponent implements OnInit {
  @Input() games: PokemonGameIndex[] = [];
  constructor() {}

  ngOnInit(): void {}
}
