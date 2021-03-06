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
        // console.log("items", items);
        if (items.length == 0) {
          throw new Error(`No Results for ${config.key}`);
        }
      })
    );
  }

  getById$(config: IndexedDbConfig, id: number) {
    return this.db.getByID(config.key, id).pipe(
      tap((item) => {
        // console.log("get gy id", item);
        // factory the data into the appropriate stores
        if (item === null || item === undefined) {
          throw new Error(`no results for ${id}`);
        }
      })
    );
  }

  updateEntity$(config: IndexedDbConfig, data: any) {
    this.db.update(config.key, data);
  }
  update$(config: IndexedDbConfig, data: any[]) {
    data.forEach((item) => this.db.update(config.key, item));
  }
}
