import { createAction, props } from "@ngrx/store";
import { GameVersion } from "../lib/game-version/game-version";

export const retreiveGameVersionList = createAction(
  "[Game Version] Retreive Game Version List",
  props<{ GameVersions: GameVersion[] }>()
);

export const setActiveGameVersion = createAction(
  "[Game Version] Set Active Game Version",
  props<{ GameVersion: GameVersion }>()
);
