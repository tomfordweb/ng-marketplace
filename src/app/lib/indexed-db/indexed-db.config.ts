import { DBConfig } from "ngx-indexed-db";
import { PokemonSpeciesIndexedDb } from "../pokemon-species/pokemon-species.indexed-db";
import { PokemonIndexedDb } from "../pokemon/pokemon.indexed-db";

export const APP_INDEXED_DB_CONFIG: DBConfig = {
  name: "pwa-pokedex",
  version: 1,
  objectStoresMeta: [
    {
      store: "gameVersions",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "name", keypath: "name", options: { unique: true } },
        { name: "url", keypath: "url", options: { unique: true } },
      ],
    },
    PokemonSpeciesIndexedDb,
    PokemonIndexedDb,
    {
      store: "versionGroup",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        {
          name: "generation",
          keypath: "generation",
          options: { unique: false },
        },
        {
          name: "entry_number",
          keypath: "entry_number",
          options: { unique: true },
        },
        {
          name: "move_learn_methods",
          keypath: "move_learn_methods",
          options: { unique: false },
        },
        { name: "name", keypath: "name", options: { unique: false } },
        { name: "pokedexes", keypath: "pokedexes", options: { unique: false } },
        { name: "versions", keypath: "versions", options: { unique: false } },
        {
          name: "order",
          keypath: "order",
          options: { unique: false },
        },
      ],
    },
    {
      store: "pokedex",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "name", keypath: "name", options: { unique: true } },
        {
          name: "entry_number",
          keypath: "entry_number",
          options: { unique: true },
        },
        {
          name: "is_main_series",
          keypath: "is_main_series",
          options: { unique: false },
        },
        { name: "pokemon", keypath: "pokemon", options: { unique: false } },
        {
          name: "descriptions",
          keypath: "descriptions",
          options: { unique: false },
        },
      ],
    },
  ],
};
