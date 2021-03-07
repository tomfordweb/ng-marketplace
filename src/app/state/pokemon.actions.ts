import { createAction, props } from "@ngrx/store";
import {
  MultiplePokedexApiResponse,
  PokedexApiResponse,
} from "../lib/pokedex/pokedex-api-response";
import { Pokemon } from "../lib/pokemon/pokemon";

export const retrievedPokemonInformationFromPokedexResponse = createAction(
  "[Pokemon] Retreive basic Pokemon information from Pokedex response",
  props<{ PokedexApiResponse: PokedexApiResponse }>()
);

export const retrievedPokemonInformationFromMultiplePokedexResponse = createAction(
  "[Pokemon] Retreive basic Pokemon information from Pokedex response",
  props<{ MultiplePokedexApiResponse: MultiplePokedexApiResponse }>()
);
