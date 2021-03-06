import { GameVersion } from "../game-version/game-version";

export interface AppState {
  gameVersions: ReadonlyArray<GameVersion>;
}