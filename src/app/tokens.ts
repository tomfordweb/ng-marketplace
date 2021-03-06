import { InjectionToken } from "@angular/core";
import { IndexedDbConfig } from "./indexed-db-config";

export const INDEXED_DB_CONFIG = new InjectionToken<IndexedDbConfig>(
  "indexeddb.config"
);
