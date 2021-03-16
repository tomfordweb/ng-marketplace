import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { GameVersion } from "src/app/lib/game-version/game-version";
import { GameVersionsApiResponse } from "src/app/lib/game-version/gane-versions-api-response";

@Component({
  selector: "app-pokemon-game-select",
  template: `<select
    class="nav nav-tabs"
    [(ngModel)]="value"
    (change)="handleChange($event)"
  >
    <option *ngFor="let game of games" [value]="game.name">
      {{ game.name }}
    </option>
  </select>`,
})
export class PokemonGameSelectComponent {
  @Input() games: GameVersion[] = [];
  @Input() value: string | null = null;
  constructor(private router: Router) {}
  handleChange(event: any) {
    this.router.navigate(["/pokedex", event.target.value]);
  }
}
