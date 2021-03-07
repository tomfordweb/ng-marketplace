import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";

import { of, Observable, EMPTY, forkJoin } from "rxjs";
import {
  catchError,
  map,
  mergeMap,
  pluck,
  switchMap,
  tap,
} from "rxjs/operators";
import { Pokedex } from "./pokedex";
import { INDEXED_DB_CONFIG } from "../../tokens";
import { IndexedDbConfig } from "../../indexed-db-config";
import { CachedRequestService } from "../../cached-request.service";
import { GameVersion } from "../game-version/game-version";
import {
  MultiplePokedexApiResponse,
  PokedexApiResponse,
} from "./pokedex-api-response";
import { VERSION_GROUP_INDEXED_DB_CONFIG } from "../version-group/version-group.indexed-db";
import { VersionGroupService } from "../version-group/version-group.service";
import { extractIdFromEndOfUrl } from "../extract-id-from-url";
import { VersionGroup } from "../version-group/version-group";

@Injectable()
export class PokedexService {
  constructor(
    @Inject(INDEXED_DB_CONFIG) private config: IndexedDbConfig,
    private versionGroupService: VersionGroupService,
    private cachedRequestService: CachedRequestService,
    private http: HttpClient
  ) {}

  protected getPokedexByIdAndAttachGameVersion$(
    id: number,
    gameVersion: GameVersion
  ) {
    return (
      this.cachedRequestService
        // attempt to get from cache
        .getById$(this.config, id)
        .pipe(
          catchError((error) => {
            // If we failed to retreive it from the cache, return the api request
            return this.http
              .get<PokedexApiResponse>(
                `https://pokeapi.co/api/v2/pokedex/${id}`
              )
              .pipe(
                // update indexeddb with the new data
                tap((pokedex) =>
                  this.cachedRequestService.updateEntity$(this.config, pokedex)
                )
              );
          }),
          map((pokedexApi) => ({
            ...pokedexApi,
            gameVersion: gameVersion.id,
          }))
        )
    );
  }
  getPokedexByGameVersion$(
    gameVersion: GameVersion
  ): Observable<MultiplePokedexApiResponse> {
    return this.versionGroupService
      .getVersionGroupByGameVersion$(gameVersion)

      .pipe(
        map((versionGroup) =>
          versionGroup.pokedexes.reduce(
            (
              map: { [name: string]: Observable<PokedexApiResponse> },
              pokedexBasic
            ) => {
              map[pokedexBasic.name] = this.getPokedexByIdAndAttachGameVersion$(
                extractIdFromEndOfUrl(pokedexBasic.url),
                gameVersion
              );

              return map;
            },
            {}
          )
        ),
        switchMap((urls) => forkJoin(urls))
        // tap((data) =>
        //   console.log(
        //     "Complete pokedex response for Game",
        //     gameVersion.name,
        //     data
        //   )
        // )
      );
  }
}
