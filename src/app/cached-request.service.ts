import { Injectable } from "@angular/core";
import { NgxIndexedDBService } from "ngx-indexed-db";
import { tap } from "rxjs/operators";
import { IndexedDbConfig } from "./indexed-db-config";

@Injectable({ providedIn: "root" })
export class CachedRequestService {
  constructor(private db: NgxIndexedDBService) {}

  getList$(config: IndexedDbConfig) {
    return this.db.getAll(config.key).pipe(
      tap((items) => {
        if (items.length == 0) {
          throw new Error(`No Results for ${config.key}`);
        }
      })
    );
  }

  getByProperty$(config: IndexedDbConfig, prop: string, value: IDBValidKey) {
    return this.db.getByIndex(config.key, prop, value).pipe(
      tap((item) => {
        // console.log("from cache", config, item);
        // factory the data into the appropriate store
        if (item === null || item === undefined) {
          throw new Error(`no results for ${value}`);
        }
      })
    );
  }
  getById$(config: IndexedDbConfig, id: number) {
    return this.db.getByKey(config.key, id).pipe(
      tap((item) => {
        // console.log("from cache", config, item);
        // factory the data into the appropriate stores
        if (item === null || item === undefined) {
          throw new Error(`no results for ${id}`);
        }
      })
    );
  }

  updateEntity$(config: IndexedDbConfig, data: any) {
    // console.log("saving in cache", config, data);
    this.db.update(config.key, data);
  }
  update$(config: IndexedDbConfig, data: any[]) {
    data.forEach((item) => this.db.update(config.key, item));
  }
}
