import { createReducer, on, Action } from "@ngrx/store";
import { GameVersion } from "../lib/game-version/game-version";
import { AppState } from "./app.state";

import {
  retreiveGameVersionList,
  setActiveGameVersion,
} from "./game-versions.actions";

export const initialState: ReadonlyArray<GameVersion> = [];

export const gameVersionsReducer = createReducer(
  initialState,
  on(retreiveGameVersionList, (state, { GameVersions }) => {
    GameVersions = GameVersions.map((game) => ({ ...game, active: false }));
    return [...GameVersions];
  }),
  on(setActiveGameVersion, (state: any, { GameVersion }) => {
    const newState = state.map((game: GameVersion) => ({
      ...game,
      active: game.id === GameVersion.id,
    }));

    return [...newState];
  })
);
