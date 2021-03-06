import { routerErrorAction } from "@ngrx/router-store";
import { createSelector } from "@ngrx/store";
import { GameVersion } from "../lib/game-version/game-version";
import { Pokedex } from "../lib/pokedex/pokedex";
import { Pokemon } from "../lib/pokemon/pokemon";
import { AppState } from "./app.state";
import { selectActivePokedex } from "./pokedex.selector";
import { selectRouteParams } from "./router.selectors";

export const selectAllPokemon = createSelector(
  (state: any) => state.pokemon,
  (pokemon: Array<Pokemon>) => pokemon
);

export const selectActivePokemonByRouterParam = createSelector(
  selectRouteParams,
  selectAllPokemon,
  (routeParams, allPokemon: Pokemon[]) => {
    return allPokemon.filter(
      (pokemon) => pokemon.id == routeParams.pokemonId
    )[0];
  }
);
