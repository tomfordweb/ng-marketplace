import { createSelector } from "@ngrx/store";
import { GameVersion } from "../lib/game-version/game-version";
import { Pokemon } from "../lib/pokemon/pokemon";
import { AppState } from "./app.state";

export const selectGameVersions = createSelector(
  (state: any) => state.pokemon,
  (pokemon: Array<Pokemon>) => pokemon
);
