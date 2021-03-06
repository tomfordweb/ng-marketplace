import { routerErrorAction } from "@ngrx/router-store";
import { createSelector } from "@ngrx/store";
import { GameVersion } from "../lib/game-version/game-version";
import { Pokedex } from "../lib/pokedex/pokedex";
import { PokemonSpecies } from "../lib/pokemon-species/pokemon-species";
import { Pokemon } from "../lib/pokemon/pokemon";
import { AppState } from "./app.state";
import { selectActivePokedexByGameVersionRouterParam } from "./pokedex.selector";
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
      (pokemon) => pokemon.id == routeParams.versionPokemon
    )[0];
  }
);
