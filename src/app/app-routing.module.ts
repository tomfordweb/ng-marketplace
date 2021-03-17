import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "pokedex",
    loadChildren: () =>
      import("./pokedex/pokedex.module").then((m) => m.PokedexModule),
  },
  {
    path: "pokemon",
    loadChildren: () =>
      import("./pokemon-detail/pokemon-detail.module").then(
        (m) => m.PokemonDetailModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
