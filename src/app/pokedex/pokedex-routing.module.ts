import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PokemonDetailComponent } from "../components/pokemon-detail/pokemon-detail.component";
import { PokedexComponent } from "./pokedex.component";
import { SelectAPokemonComponent } from "./select-a-pokemon/select-a-pokemon.component";

const routes: Routes = [
  {
    path: "",
    component: PokedexComponent,
    children: [
      { path: ":version", component: SelectAPokemonComponent },
      { path: ":version/:versionPokemon", component: PokemonDetailComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokedexRoutingModule {}
