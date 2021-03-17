import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PokemonDetailComponent } from "../components/pokemon-detail/pokemon-detail.component";
import { BasePokemonDetailComponent } from "./pokemon-detail.component";

const routes: Routes = [
  {
    path: "",
    component: BasePokemonDetailComponent,
    children: [
      {
        path: ":pokemonName",
        component: PokemonDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonDetailRoutingModule {}
