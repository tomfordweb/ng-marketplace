import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";

import { of, Observable, EMPTY } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Pokedex } from "./pokedex";
import { INDEXED_DB_CONFIG } from "../../tokens";
import { IndexedDbConfig } from "../../indexed-db-config";
import { CachedRequestService } from "../../cached-request.service";
import { GameVersion } from "../game-version/game-version";
import { PokedexApiResponse } from "./pokedex-api-response";

@Injectable()
export class PokedexService {
  constructor(
    @Inject(INDEXED_DB_CONFIG) private config: IndexedDbConfig,
    private cachedRequestService: CachedRequestService,
    private http: HttpClient
  ) {}

  getPokedexByGameVersion$(
    gameVersion: GameVersion
  ): Observable<Array<Pokedex>> {
    return (
      this.cachedRequestService
        // attempt to get from cache
        .getList$(this.config)
        .pipe(
          catchError((error) => {
            // If we failed to retreive it from the cache, return the api request
            return this.http
              .get<PokedexApiResponse>(
                `https://pokeapi.co/api/v2/pokedex/${gameVersion.id}`
              )
              .pipe(
                map((response) => response.results || []),
                // store the data in indexeddb!
                tap((gameVersions: Pokedex[]) =>
                  this.cachedRequestService.update$(this.config, gameVersions)
                )
              );
          })
        )
    );
  }
}
