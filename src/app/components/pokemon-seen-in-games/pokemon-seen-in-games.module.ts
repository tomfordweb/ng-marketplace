import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PokemonSeenInGamesComponent } from "./pokemon-seen-in-games.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [PokemonSeenInGamesComponent],
  exports: [PokemonSeenInGamesComponent],
  imports: [RouterModule, CommonModule],
})
export class PokemonSeenInGamesModule {}
