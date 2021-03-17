import { IndexedDbConfig } from "../../indexed-db-config";

export const POKEMON_INDEXED_DB_CONFIG: IndexedDbConfig = {
  key: "pokemon",
};

export const PokemonIndexedDb = {
  store: "pokemon",
  storeConfig: { keyPath: "id", autoIncrement: true },
  storeSchema: [
    {
      name: "base_experience",
      keypath: "base_experience",
      options: { unique: false },
    },
    { name: "name", keypath: "name", options: { unique: true } },
    { name: "order", keypath: "order", options: { unique: true } },
    { name: "past_types", keypath: "past_types", options: { unique: false } },
    { name: "weight", keypath: "weight", options: { unique: false } },
    { name: "species", keypath: "species", options: { unique: false } },
    { name: "height", keypath: "height", options: { unique: false } },
    { name: "id", keypath: "id", options: { unique: true } },
    { name: "is_default", keypath: "is_default", options: { unique: false } },
    {
      name: "location_area_encounters",
      keypath: "location_area_encounters",
      options: { unique: false },
    },
    { name: "sprites", keypath: "sprites", options: { unique: false } },
    { name: "stats", keypath: "stats", options: { unique: false } },
    { name: "types", keypath: "types", options: { unique: false } },
    { name: "held_items", keypath: "held_items", options: { unique: false } },
    { name: "moves", keypath: "moves", options: { unique: false } },
    {
      name: "game_indicies",
      keypath: "game_indicies",
      options: { unique: false },
    },
    { name: "abilities", keypath: "abilities", options: { unique: false } },
  ],
};
