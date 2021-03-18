import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PokemonAbilitiesComponent } from "./pokemon-abilities.component";

@NgModule({
  declarations: [PokemonAbilitiesComponent],
  exports: [PokemonAbilitiesComponent],
  imports: [CommonModule],
})
export class PokemonAbilitiesModule {}
