import { routerErrorAction } from "@ngrx/router-store";
import { createSelector } from "@ngrx/store";
import { GameVersion } from "../lib/game-version/game-version";
import { Pokedex } from "../lib/pokedex/pokedex";
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
  selectActivePokedexByGameVersionRouterParam,
  (routeParams, allPokemon: Pokemon[], activePokedex: Pokedex) => {
    console.log(activePokedex);
    const pokemonId = activePokedex.pokemon.filter((pokemon) => {
      return pokemon.entry == routeParams.versionPokemon;
    })[0];

    console.log("mything", pokemonId, routeParams);
    return allPokemon.filter((pokemon) => pokemon.id == pokemonId.id)[0];
  }
);
