import { decimalDigest } from "@angular/compiler/src/i18n/digest";
import { createAction, props } from "@ngrx/store";
import {
  MultiplePokedexApiResponse,
  PokedexApiResponse,
} from "../lib/pokedex/pokedex-api-response";
import { PokemonSpecies } from "../lib/pokemon-species/pokemon-species";

export const retreivedPokemon = createAction(
  "[Pokemon] Retreive pokemon",
  props<{ PokemonApi: PokemonSpecies }>()
);

export const retrievedPokemonInformationFromMultiplePokedexResponse = createAction(
  "[Pokemon] Retreive basic Pokemon information from Pokedex response",
  props<{ MultiplePokedexApiResponse: MultiplePokedexApiResponse }>()
);
