import { routerErrorAction } from "@ngrx/router-store";
import { createSelector } from "@ngrx/store";
import { GameVersion } from "../lib/game-version/game-version";
import { Pokedex } from "../lib/pokedex/pokedex";
import { PokemonSpecies } from "../lib/pokemon-species/pokemon-species";
import { AppState } from "./app.state";
import { selectActivePokedexByGameVersionRouterParam } from "./pokedex.selector";
import { selectRouteParams } from "./router.selectors";

export const selectAllPokemon = createSelector(
  (state: any) => state.pokemonSpecies,
  (pokemon: Array<PokemonSpecies>) => pokemon
);

export const selectActivePokemonByRouterParam = createSelector(
  selectRouteParams,
  selectAllPokemon,
  (routeParams, allPokemon: PokemonSpecies[]) => {
    if (!!routeParams.pokemonName) {
      return allPokemon.filter(
        (pokemon) => pokemon.name == routeParams.pokemonName
      )[0];
    }

    if (!!routeParams.versionPokemon) {
      return allPokemon.filter(
        (pokemon) => pokemon.id == routeParams.versionPokemon
      )[0];
    }

    return null;
  }
);
