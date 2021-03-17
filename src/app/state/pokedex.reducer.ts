import { LiteralMapEntry } from "@angular/compiler/src/output/output_ast";
import { createReducer, on, Action } from "@ngrx/store";
import { extractIdFromEndOfUrl } from "../lib/extract-id-from-url";
import { Pokedex } from "../lib/pokedex/pokedex";
import { PokedexApiResponse } from "../lib/pokedex/pokedex-api-response";

import {
  retreivedAllPokedexesForGame,
  retreivedPokedexContents,
} from "./pokedex.actions";

export const initialState: ReadonlyArray<Pokedex> = [];

export const pokedexApiFactory = (PokedexApiResponse: PokedexApiResponse) => {
  const pokedex: Pokedex = {
    id: PokedexApiResponse.id,
    is_main_series: PokedexApiResponse.is_main_series,
    name: PokedexApiResponse.name,
    gameVersion: [PokedexApiResponse.gameVersion],
    pokemon: PokedexApiResponse.pokemon_entries.map((entry) => {
      return {
        entry: entry.entry_number,
        name: entry.pokemon_species.name,
        id: extractIdFromEndOfUrl(entry.pokemon_species.url),
      };
    }),
  };
  return pokedex;
};

export const pokedexReducer = createReducer(
  initialState,
  on(retreivedAllPokedexesForGame, (state, { MultiplePokedexApiResponse }) => {
    const pokedexNew = Object.values(
      MultiplePokedexApiResponse
    ).map((pokedexApi) => pokedexApiFactory(pokedexApi));

    // sorry
    const newState = state.map((pokedex) => {
      const duplicateNewPokedex = pokedexNew.findIndex(
        (pokedexState) => pokedexState.id === pokedex.id
      );

      if (duplicateNewPokedex !== -1) {
        pokedex = {
          ...pokedex,
          gameVersion: [
            ...pokedexNew[duplicateNewPokedex].gameVersion,
            ...pokedex.gameVersion,
          ],
        };
        pokedex.gameVersion = [...new Set(pokedex.gameVersion)];

        pokedexNew.splice(duplicateNewPokedex, 1);
      }

      return pokedex;
    });
    return [...newState, ...pokedexNew];
  }),
  on(retreivedPokedexContents, (state, { PokedexApiResponse }) => {
    const pokedex = pokedexApiFactory(PokedexApiResponse);
    return [...state, pokedex];
  })
);
