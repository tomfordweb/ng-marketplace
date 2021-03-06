import { createReducer, on, Action } from "@ngrx/store";
import { GameVersion } from "../lib/game-version/game-version";
import { Pokemon } from "../lib/pokemon/pokemon";
import { AppState } from "./app.state";

import { retreiveGameVersionList } from "./game-versions.actions";
import { retrievedPokemonInformationFromPokedexResponse } from "./pokemon.actions";

export const initialState: ReadonlyArray<Pokemon> = [];

export const pokemonReducer = createReducer(
  initialState,
  on(
    retrievedPokemonInformationFromPokedexResponse,
    (state, { PokedexApiResponse }) => {
      const pokemonBasic: Pokemon[] = PokedexApiResponse.pokemon_entries
        .map((pokemon) => {
          const speciesParts = pokemon.pokemon_species.url.split("/");
          return {
            name: pokemon.pokemon_species.name,
            id: parseInt(speciesParts[speciesParts.length - 2]),
            url: pokemon.pokemon_species.url,
          };
        })
        .map((pokemonBasic) => {
          const existingIndex = state.findIndex(
            (pokemonState) => pokemonState.id === pokemonBasic.id
          );
          if (existingIndex !== -1) {
            const pokemonState = state[existingIndex];
            pokemonBasic = {
              ...pokemonState,
              ...pokemonBasic,
            };
          }

          return pokemonBasic;
        });

      return [...pokemonBasic];
    }
  )
);
