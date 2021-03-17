import { createReducer, on, Action } from "@ngrx/store";
import { extractIdFromEndOfUrl } from "../lib/extract-id-from-url";
import { GameVersion } from "../lib/game-version/game-version";
import { PokedexApiResponse } from "../lib/pokedex/pokedex-api-response";
import { PokemonSpecies } from "../lib/pokemon-species/pokemon-species";
import { Pokemon } from "../lib/pokemon/pokemon";
import { AppState } from "./app.state";

import { retreiveGameVersionList } from "./game-versions.actions";
import {
  retreivedPokemonSpeciesData,
  retreivedBasicSpeciesListFromPokedex,
} from "./pokemon-species.actions";
import { retreivedPokemonData } from "./pokemon.actions";

export const initialState: ReadonlyArray<Pokemon> = [];

export const pokemonReducer = createReducer(
  initialState,
  on(retreivedPokemonData, (state, { Pokemon }) => {
    const existingPokemon = state.findIndex(
      (pokemon) => pokemon.id === Pokemon.id
    );

    if (existingPokemon === -1) {
      return [...state, ...[Pokemon]];
    }

    const newPokemon = {
      ...state[existingPokemon],
      ...Pokemon,
    };
    state = state.map((existingState) => {
      if (existingState.id === newPokemon.id) {
        return newPokemon;
      }
      return existingState;
    });

    return [...state];
  })
);
