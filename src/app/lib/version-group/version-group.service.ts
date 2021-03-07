import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, Self } from "@angular/core";

import { of, Observable, EMPTY } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { INDEXED_DB_CONFIG } from "../../tokens";
import { IndexedDbConfig } from "../../indexed-db-config";
import { CachedRequestService } from "../../cached-request.service";
import { GameVersion } from "../game-version/game-version";
import { VERSION_GROUP_INDEXED_DB_CONFIG } from "../version-group/version-group.indexed-db";
import { VersionGroup } from "./version-group";

@Injectable()
export class VersionGroupService {
  constructor(
    private cachedRequestService: CachedRequestService,
    private http: HttpClient
  ) {}

  getVersionGroupByGameVersion$(
    gameVersion: GameVersion
  ): Observable<VersionGroup> {
    return (
      this.cachedRequestService
        // attempt to get from cache
        .getById$(VERSION_GROUP_INDEXED_DB_CONFIG, gameVersion.id)
        .pipe(
          catchError((error) => {
            // If we failed to retreive it from the cache, return the api request
            return this.http
              .get<VersionGroup>(
                `https://pokeapi.co/api/v2/version-group/${gameVersion.id}`
              )
              .pipe(
                // update indexeddb with the new data
                tap((pokedex) =>
                  this.cachedRequestService.updateEntity$(
                    VERSION_GROUP_INDEXED_DB_CONFIG,
                    pokedex
                  )
                )
              );
          })
        )
    );
  }
}
