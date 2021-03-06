import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PokemonDetailComponent } from "./pokemon-detail.component";

@NgModule({
  imports: [RouterModule, CommonModule],
  declarations: [PokemonDetailComponent],
  exports: [PokemonDetailComponent],
})
export class PokemonDetailComponentModule {}
