import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PokemonSpeciesLibModule } from "src/app/lib/pokemon-species/pokemon-species.module";
import { PokemonLibModule } from "src/app/lib/pokemon/pokemon.module";
import { CheckmarkItemModule } from "../checkmark-item/checkmark-item.module";
import { PokemonAbilitiesModule } from "../pokemon-abilities/pokemon-abilities.module";
import { PokemonSeenInGamesModule } from "../pokemon-seen-in-games/pokemon-seen-in-games.module";
import { PokemonDetailComponent } from "./pokemon-detail.component";

@NgModule({
  imports: [
    RouterModule,
    PokemonSpeciesLibModule,
    PokemonLibModule,
    CommonModule,
    PokemonSeenInGamesModule,
    PokemonAbilitiesModule,
    CheckmarkItemModule,
  ],
  declarations: [PokemonDetailComponent],
  exports: [PokemonDetailComponent],
})
export class PokemonDetailComponentModule {}
