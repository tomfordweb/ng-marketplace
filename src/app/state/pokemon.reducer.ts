import { createReducer, on, Action } from "@ngrx/store";
import { GameVersion } from "../lib/game-version/game-version";
import { Pokemon } from "../lib/pokemon/pokemon";

import { retreiveGameVersionList } from "./game-versions.actions";
import { retrievePokemonInformation } from "./pokemon.actions";

export const initialState: ReadonlyArray<Pokemon> = [];

export const pokemonReducer = createReducer(
  initialState,
  on(retrievePokemonInformation, (state, { Pokemon }) => [...Pokemon])
);
