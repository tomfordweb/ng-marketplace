import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CheckmarkItemModule } from "../checkmark-item/checkmark-item.module";
import { PokemonDetailComponent } from "./pokemon-detail.component";

@NgModule({
  imports: [RouterModule, CommonModule, CheckmarkItemModule],
  declarations: [PokemonDetailComponent],
  exports: [PokemonDetailComponent],
})
export class PokemonDetailComponentModule {}
