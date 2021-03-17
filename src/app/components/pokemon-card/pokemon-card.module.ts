import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PokemonCardComponent } from "./pokemon-card.component";
import { PokemonIndexedDb } from "src/app/lib/pokemon/pokemon.indexed-db";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [PokemonCardComponent],
  imports: [CommonModule, RouterModule],
  exports: [PokemonCardComponent],
})
export class PokemonCardModule {}
