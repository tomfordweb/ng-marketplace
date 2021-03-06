import { createSelector } from "@ngrx/store";
import { GameVersion } from "../game-version/game-version";
import { AppState } from "./app.state";

export const selectGameVersions = createSelector(
  (state: any) => state.gameVersions,
  (gameVersions: Array<GameVersion>) => gameVersions
);
