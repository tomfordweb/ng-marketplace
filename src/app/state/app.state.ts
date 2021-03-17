import { GameVersion } from "../lib/game-version/game-version";
import { Pokedex } from "../lib/pokedex/pokedex";
import { PokemonSpecies } from "../lib/pokemon-species/pokemon-species";
import { Pokemon } from "../lib/pokemon/pokemon";
import { gameVersionsReducer } from "./game-versions.reducer";

export interface AppState {
  gameVersions: ReadonlyArray<GameVersion>;
  pokedex: ReadonlyArray<Pokedex>;
  pokemonSpecies: ReadonlyArray<PokemonSpecies>;
  pokemon: ReadonlyArray<Pokemon>;
}
