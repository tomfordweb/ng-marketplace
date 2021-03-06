import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";

import { of, Observable, EMPTY } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { GameVersion } from "./game-version";
import { GameVersionsApiResponse } from "./gane-versions-api-response";
import { INDEXED_DB_CONFIG } from "../../tokens";
import { IndexedDbConfig } from "../../indexed-db-config";
import { CachedRequestService } from "../../cached-request.service";

@Injectable()
export class GameVersionService {
  constructor(
    @Inject(INDEXED_DB_CONFIG) private config: IndexedDbConfig,
    private cachedRequestService: CachedRequestService,
    private http: HttpClient
  ) {}

  getGames(): Observable<Array<GameVersion>> {
    return (
      this.cachedRequestService
        // attempt to get from cache
        .getList$(this.config)
        .pipe(
          catchError((error) => {
            // If we failed to retreive it from the cache, return the api request
            return this.http
              .get<GameVersionsApiResponse>(
                "https://pokeapi.co/api/v2/version-group"
              )
              .pipe(
                map((response) => response.results || []),
                // store the data in indexeddb!
                tap((gameVersions: GameVersion[]) =>
                  this.cachedRequestService.update$(this.config, gameVersions)
                )
              );
          })
        )
    );
  }
}
