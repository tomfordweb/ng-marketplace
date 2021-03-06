import { createAction, props } from "@ngrx/store";
import { Pokemon } from "../lib/pokemon/pokemon";

export const retrievePokemonInformation = createAction(
  "[Pokemon] Retreive Pokemon information",
  props<{ Pokemon: Pokemon[] }>()
);
