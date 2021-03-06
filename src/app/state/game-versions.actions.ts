import { createAction, props } from "@ngrx/store";
import { GameVersion } from "../game-version/game-version";

export const retreiveGameVersionList = createAction(
  "[Game Versions] Retreive Game Version List",
  props<{ GameVersion: GameVersion[] }>()
);
