import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { GameVersion } from "src/app/lib/game-version/game-version";

@Component({
  selector: "app-pokemon-game-list",
  template: ` <ul class="nav nav-tabs">
    <li *ngFor="let game of games" class="nav-item">
      <a class="nav-link" [routerLink]="['/pokedex', game.name]">{{
        game.name
      }}</a>
    </li>
  </ul>`,
  styleUrls: ["./pokemon-game-list.component.scss"],
})
export class PokemonGameListComponent {
  @Input() games: GameVersion[] = [];
}
