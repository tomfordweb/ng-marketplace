import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PokedexRoutingModule } from "./pokedex-routing.module";
import { PokedexComponent } from "./pokedex.component";
import { PokedexLibModule } from "../lib/pokedex/pokedex.module";

@NgModule({
  declarations: [PokedexComponent],
  imports: [CommonModule, PokedexRoutingModule, PokedexLibModule],
})
export class PokedexModule {}
