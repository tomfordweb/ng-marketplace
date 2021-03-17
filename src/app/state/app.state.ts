import { GameVersion } from "../lib/game-version/game-version";
import { Pokedex } from "../lib/pokedex/pokedex";
import { PokemonSpecies } from "../lib/pokemon-species/pokemon-species";

export interface AppState {
  gameVersions: ReadonlyArray<GameVersion>;
  pokedex: ReadonlyArray<Pokedex>;
  pokemon: ReadonlyArray<PokemonSpecies>;
}
