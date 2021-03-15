import { decimalDigest } from "@angular/compiler/src/i18n/digest";
import { createAction, props } from "@ngrx/store";
import {
  MultiplePokedexApiResponse,
  PokedexApiResponse,
} from "../lib/pokedex/pokedex-api-response";
import { Pokemon } from "../lib/pokemon/pokemon";

export const retreivedPokemon = createAction(
  "[Pokemon] Retreive pokemon",
  props<{ PokemonApi: Pokemon }>()
);

export const retrievedPokemonInformationFromMultiplePokedexResponse = createAction(
  "[Pokemon] Retreive basic Pokemon information from Pokedex response",
  props<{ MultiplePokedexApiResponse: MultiplePokedexApiResponse }>()
);
