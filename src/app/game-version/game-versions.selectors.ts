import { createSelector } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { GameVersion } from "./game-version";

export const selectBooks = createSelector(
  (state: AppState) => state.gameVersions,
  (gameVersions: Array<GameVersion>) => gameVersions
);