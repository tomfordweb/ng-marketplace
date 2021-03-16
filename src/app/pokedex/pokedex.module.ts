import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PokedexRoutingModule } from "./pokedex-routing.module";
import { PokedexComponent } from "./pokedex.component";
import { PokedexLibModule } from "../lib/pokedex/pokedex.module";
import { PokemonGameListComponentModule } from "../components/pokemon-game-list/pokemon-game-list.module";
import { PokemonDetailComponentModule } from "../components/pokemon-detail/pokemon-detail.module";
import { RouterModule } from "@angular/router";
import { SelectAPokemonComponent } from "./select-a-pokemon/select-a-pokemon.component";
import { PokemonLibModule } from "../lib/pokemon/pokemon.module";
import { PokemonGameSelectorComponentModule } from "../components/pokemon-game-selector/pokemon-game-selector.module";

@NgModule({
  declarations: [PokedexComponent, SelectAPokemonComponent],
  imports: [
    RouterModule,
    CommonModule,
    PokedexRoutingModule,
    PokedexLibModule,
    PokemonLibModule,
    PokemonDetailComponentModule,
    PokemonGameSelectorComponentModule,
    PokemonGameListComponentModule,
  ],
})
export class PokedexModule {}
