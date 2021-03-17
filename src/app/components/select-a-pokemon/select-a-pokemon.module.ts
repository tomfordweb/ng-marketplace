import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SelectAPokemonComponent } from "./select-a-pokemon.component";
import { RouterModule } from "@angular/router";
import { PokemonCardModule } from "../pokemon-card/pokemon-card.module";

@NgModule({
  declarations: [SelectAPokemonComponent],
  imports: [CommonModule, PokemonCardModule, RouterModule],
  exports: [SelectAPokemonComponent],
})
export class SelectAPokemonModule {}
