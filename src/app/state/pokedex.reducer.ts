import { LiteralMapEntry } from "@angular/compiler/src/output/output_ast";
import { createReducer, on, Action } from "@ngrx/store";
import { Pokedex } from "../lib/pokedex/pokedex";
import { PokedexApiResponse } from "../lib/pokedex/pokedex-api-response";

import { retreivedPokedexContents } from "./pokedex.actions";

export const initialState: ReadonlyArray<Pokedex> = [];

export const createPokedexFromPokedexApiResponse = (
  response: PokedexApiResponse
) => {
  return;
};

export const pokedexReducer = createReducer(
  initialState,
  on(retreivedPokedexContents, (state, { PokedexApiResponse }) => {
    const pokedex: Pokedex = {
      id: PokedexApiResponse.id,
      is_main_series: PokedexApiResponse.is_main_series,
      name: PokedexApiResponse.name,
      pokemon: PokedexApiResponse.pokemon_entries.map(
        (entry) => entry.entry_number
      ),
    };
    return [...state, pokedex];
  })
);