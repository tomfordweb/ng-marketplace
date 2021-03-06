import { createSelector } from "@ngrx/store";
import { GameVersion } from "../lib/game-version/game-version";
import { Pokedex } from "../lib/pokedex/pokedex";
import { AppState } from "./app.state";

export const selectPokedexes = createSelector(
  (state: any) => state.pokedex,
  (pokedex: Array<Pokedex>) => pokedex
);
