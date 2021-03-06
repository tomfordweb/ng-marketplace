import { createAction, props } from "@ngrx/store";
import { Pokedex } from "../lib/pokedex/pokedex";
import { PokedexApiResponse } from "../lib/pokedex/pokedex-api-response";

export const retreivedPokedexContents = createAction(
  "[Pokedex] Retreived pokedex",
  props<{ PokedexApiResponse: PokedexApiResponse }>()
);
