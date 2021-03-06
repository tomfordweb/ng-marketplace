import { createReducer, on, Action } from "@ngrx/store";
import { GameVersion } from "../lib/game-version/game-version";
import { Pokedex } from "../lib/pokedex/pokedex";

import { retreiveGameVersionList } from "./game-versions.actions";
import { retreivePokedexContents } from "./pokedex.actions";

export const initialState: ReadonlyArray<Pokedex> = [];

export const pokedexReducer = createReducer(
  initialState,
  on(retreivePokedexContents, (state, { Pokedex }) => [...Pokedex])
);
