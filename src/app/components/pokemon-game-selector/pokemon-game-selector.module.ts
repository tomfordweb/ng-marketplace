import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { PokemonGameSelectComponent } from "./pokemon-game-selector.component";

@NgModule({
  imports: [RouterModule, FormsModule, CommonModule],
  declarations: [PokemonGameSelectComponent],
  exports: [PokemonGameSelectComponent],
})
export class PokemonGameSelectorComponentModule {}
