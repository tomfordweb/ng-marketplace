import { GameVersion } from "../lib/game-version/game-version";
import { Pokedex } from "../lib/pokedex/pokedex";
import { Pokemon } from "../lib/pokemon/pokemon";

export interface AppState {
  gameVersions: ReadonlyArray<GameVersion>;
  pokedex: ReadonlyArray<Pokedex>;
  pokemon: ReadonlyArray<Pokemon>;
}
