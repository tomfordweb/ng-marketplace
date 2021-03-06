import { DBConfig } from "ngx-indexed-db";

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
