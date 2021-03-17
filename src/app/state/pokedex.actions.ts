import { createAction, props } from "@ngrx/store";
import { Pokedex } from "../lib/pokedex/pokedex";
import {
  MultiplePokedexApiResponse,
  PokedexApiResponse,
} from "../lib/pokedex/pokedex-api-response";

export const retreivedPokedexContents = createAction(
  "[Pokedex] Retreived single pokedex",
  props<{ PokedexApiResponse: PokedexApiResponse }>()
);

export const retreivedAllPokedexesForGame = createAction(
  "[Pokedex] Retreived multiple pokedexes for game",
  props<{ MultiplePokedexApiResponse: MultiplePokedexApiResponse }>()
);
