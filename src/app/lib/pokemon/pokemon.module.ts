import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { INDEXED_DB_CONFIG } from "../../tokens";
import { POKEMON_INDEXED_DB_CONFIG } from "./pokemon.indexed-db";
import { PokemonService } from "./pokemon.service";

@NgModule({
  declarations: [],
  providers: [
    PokemonService,
    { provide: INDEXED_DB_CONFIG, useValue: POKEMON_INDEXED_DB_CONFIG },
  ],
  imports: [CommonModule],
})
export class PokemonLibModule {}
