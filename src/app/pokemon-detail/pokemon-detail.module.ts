import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PokemonDetailRoutingModule } from "./pokemon-detail-routing.module";
import { BasePokemonDetailComponent } from "./pokemon-detail.component";
import { PokemonDetailComponentModule } from "../components/pokemon-detail/pokemon-detail.module";
import { PokemonSpeciesLibModule } from "../lib/pokemon-species/pokemon-species.module";

@NgModule({
  declarations: [BasePokemonDetailComponent],
  imports: [
    CommonModule,
    PokemonDetailRoutingModule,
    PokemonDetailComponentModule,
  ],
})
export class PokemonDetailModule {}
