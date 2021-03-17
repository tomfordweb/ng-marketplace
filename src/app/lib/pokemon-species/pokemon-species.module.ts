import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { INDEXED_DB_CONFIG } from "../../tokens";
import { GameVersionService } from "../game-version/game-version.service";
import { PokemonSpeciesService } from "./pokemon-species.service";
import { POKEMON_SPECIES_INDEXED_DB_CONFIG } from "./pokemon-species.indexed-db";

@NgModule({
  declarations: [],
  providers: [
    PokemonSpeciesService,
    { provide: INDEXED_DB_CONFIG, useValue: POKEMON_SPECIES_INDEXED_DB_CONFIG },
  ],
  imports: [CommonModule],
})
export class PokemonSpeciesLibModule {}
