import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PokemonGameListComponent } from "./pokemon-game-list.component";

@NgModule({
  imports: [RouterModule, CommonModule],
  declarations: [PokemonGameListComponent],
  exports: [PokemonGameListComponent],
})
export class PokemonGameListComponentModule {}
