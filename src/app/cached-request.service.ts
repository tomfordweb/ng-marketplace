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
        console.log("items", items);
        if (items.length == 0) {
          throw new Error(`No Results for ${config.key}`);
        }
      })
    );
  }
  update$(config: IndexedDbConfig, data: any[]) {
    data.forEach((item) => this.db.update(config.key, item));
  }
}
