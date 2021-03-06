import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";

import { of, Observable, EMPTY } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";
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
  ): Observable<PokedexApiResponse> {
    return (
      this.cachedRequestService
        // attempt to get from cache
        .getById$(this.config, gameVersion.id)
        .pipe(
          catchError((error) => {
            // If we failed to retreive it from the cache, return the api request
            return this.http
              .get<PokedexApiResponse>(
                `https://pokeapi.co/api/v2/pokedex/${gameVersion.id}`
              )
              .pipe(
                // update indexeddb with the new data
                tap((pokedex) =>
                  this.cachedRequestService.updateEntity$(this.config, pokedex)
                )
              );
          }),
          tap((data) => {
            // console.log("final data returned", data);
          })
        )
    );
  }
}
