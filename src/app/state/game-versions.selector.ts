import { createSelector } from "@ngrx/store";
import { GameVersion } from "../lib/game-version/game-version";
import { AppState } from "./app.state";

export const selectGameVersions = createSelector(
  (state: any) => state.gameVersions,
  (gameVersions: Array<GameVersion>) => gameVersions
);

export const selectGameVersionByName = createSelector(
  (state: any) => state.gameVersions,
  (gameVersions: Array<GameVersion>, props: { name: string }) =>
    gameVersions.filter((game) => game.name === props.name)[0] || null
);
