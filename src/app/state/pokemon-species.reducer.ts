import { createReducer, on, Action } from "@ngrx/store";
import { extractIdFromEndOfUrl } from "../lib/extract-id-from-url";
import { GameVersion } from "../lib/game-version/game-version";
import { PokedexApiResponse } from "../lib/pokedex/pokedex-api-response";
import { PokemonSpecies } from "../lib/pokemon-species/pokemon-species";
import { AppState } from "./app.state";

import { retreiveGameVersionList } from "./game-versions.actions";
import {
  retreivedPokemonSpeciesData,
  retreivedBasicSpeciesListFromPokedex,
} from "./pokemon-species.actions";

export const initialState: ReadonlyArray<PokemonSpecies> = [];

export const factoryBasicPokemonInformationFromPokedexApiResponse = (
  PokedexApiResponse: PokedexApiResponse
) => {
  const pokemonBasic: PokemonSpecies[] = PokedexApiResponse.pokemon_entries.map(
    (pokemon) => {
      return {
        name: pokemon.pokemon_species.name,
        id: extractIdFromEndOfUrl(pokemon.pokemon_species.url),
        url: pokemon.pokemon_species.url,
      };
    }
  );
  return pokemonBasic;
};

export const pokemonSpeciesReducer = createReducer(
  initialState,
  on(retreivedPokemonSpeciesData, (state, { PokemonSpecies }) => {
    const existingPokemon = state.findIndex(
      (pokemon) => pokemon.id === PokemonSpecies.id
    );
    if (existingPokemon === -1) {
      return [...state, ...[PokemonSpecies]];
    }
    const newPokemon = {
      ...state[existingPokemon],
      ...PokemonSpecies,
    };
    state = state.map((existingState) => {
      if (existingState.id === newPokemon.id) {
        return newPokemon;
      }
      return existingState;
    });

    return [...state];
  }),
  on(
    retreivedBasicSpeciesListFromPokedex,
    (state, { MultiplePokedexApiResponse }) => {
      const manyPokedexes = Object.values(MultiplePokedexApiResponse)
        .map((item) =>
          factoryBasicPokemonInformationFromPokedexApiResponse(item)
        )
        .reduce((accumulator, pokedex) => accumulator.concat(pokedex), []);

      return [...state, ...manyPokedexes];
    }
  )
);
