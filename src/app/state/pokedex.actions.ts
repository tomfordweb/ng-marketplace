import { createAction, props } from "@ngrx/store";
import { Pokedex } from "../lib/pokedex/pokedex";

export const retreivePokedexContents = createAction(
  "[Pokedex] Retreive pokedex",
  props<{ Pokedex: Pokedex[] }>()
);
