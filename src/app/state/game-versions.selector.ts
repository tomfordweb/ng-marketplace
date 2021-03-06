import { createSelector } from "@ngrx/store";
import { GameVersion } from "../lib/game-version/game-version";
import { AppState } from "./app.state";
import { selectRouteParams } from "./router.selectors";

export const selectGameVersions = createSelector(
  (state: any) => state.gameVersions,
  (gameVersions: Array<GameVersion>) => gameVersions
);

export const selectGameVersionByName = createSelector(
  (state: any) => state.gameVersions,
  (gameVersions: Array<GameVersion>, props: { name: string }) =>
    gameVersions.filter((game) => game.name === props.name)[0] || null
);

export const selectActiveGameVersion = createSelector(
  (state: any) => state.gameVersions,
  (gameVersions: GameVersion[]) =>
    gameVersions.filter((game) => game.active === true)[0] || null
);

export const selectGameVersionByRouterParam = createSelector(
  selectRouteParams,
  selectGameVersions,
  (routerParams, gameVersions) =>
    gameVersions.filter(
      (version) => version.name === routerParams.version
    )[0] || null
);
