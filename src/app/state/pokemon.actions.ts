import { createAction, props } from "@ngrx/store";
import { PokemonSpecies } from "../lib/pokemon-species/pokemon-species";
import { Pokemon } from "../lib/pokemon/pokemon";

export const retreivedPokemonData = createAction(
  "[Pokemon] Retreive pokemon data",
  props<{ Pokemon: Pokemon }>()
);
