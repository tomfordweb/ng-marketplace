import { createAction, props } from "@ngrx/store";
import { PokedexApiResponse } from "../lib/pokedex/pokedex-api-response";
import { Pokemon } from "../lib/pokemon/pokemon";

export const retrievedPokemonInformationFromPokedexResponse = createAction(
  "[Pokemon] Retreive Pokemon names from Pokedex response",
  props<{ PokedexApiResponse: PokedexApiResponse }>()
);
