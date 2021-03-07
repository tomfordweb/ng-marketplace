import { createSelector } from "@ngrx/store";
import { GameVersion } from "../lib/game-version/game-version";
import { AppState } from "./app.state";
import { selectRouteParams } from "./router.selectors";

export const selectGameVersions = createSelector(
  (state: any) => state.gameVersions,
  (gameVersions: Array<GameVersion>) => gameVersions
);

export const selectGameVersionByRouterParam = createSelector(
  selectRouteParams,
  selectGameVersions,
  (routerParams, gameVersions) =>
    gameVersions.filter(
      (version) => version.name === routerParams.version
    )[0] || null
);
