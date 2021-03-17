import { createAction, props } from "@ngrx/store";
import {
  MultiplePokedexApiResponse,
  PokedexApiResponse,
} from "../lib/pokedex/pokedex-api-response";
import { PokemonSpecies } from "../lib/pokemon-species/pokemon-species";

export const retreivedPokemonSpeciesData = createAction(
  "[Pokemon Species] Retreive pokemon species data",
  props<{ PokemonSpecies: PokemonSpecies }>()
);

export const retreivedBasicSpeciesListFromPokedex = createAction(
  "[Pokemon Species] Retreive basic Pokemon information from Pokedex response",
  props<{ MultiplePokedexApiResponse: MultiplePokedexApiResponse }>()
);
