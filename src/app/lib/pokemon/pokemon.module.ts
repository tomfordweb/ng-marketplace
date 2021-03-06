import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { POKEMON_INDEXED_DB_CONFIG } from "./pokemon.indexed-db";
import { INDEXED_DB_CONFIG } from "../../tokens";
import { GameVersionService } from "../game-version/game-version.service";

@NgModule({
  declarations: [],
  providers: [
    GameVersionService,
    { provide: INDEXED_DB_CONFIG, useValue: POKEMON_INDEXED_DB_CONFIG },
  ],
  imports: [CommonModule],
})
export class PokemonModule {}
