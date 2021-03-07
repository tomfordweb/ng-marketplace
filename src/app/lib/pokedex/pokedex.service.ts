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
import { PokedexApiResponse } from "./pokedex-api-response";
import { VERSION_GROUP_INDEXED_DB_CONFIG } from "../version-group/version-group.indexed-db";
import { VersionGroupService } from "../version-group/version-group.service";
import { extractIdFromEndOfUrl } from "../extract-id-from-url";

@Injectable()
export class PokedexService {
  constructor(
    @Inject(INDEXED_DB_CONFIG) private config: IndexedDbConfig,
    private versionGroupService: VersionGroupService,
    private cachedRequestService: CachedRequestService,
    private http: HttpClient
  ) {}
  getPokedexById(id: number) {
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
          })
        )
    );
  }
  getPokedexByGameVersion$(
    gameVersion: GameVersion
  ): Observable<PokedexApiResponse[]> {
    return this.versionGroupService
      .getVersionGroupByGameVersion$(gameVersion)
      .pipe(
        tap((thing) => console.log("thing", thing)),
        pluck("pokedexes"),
        map((pokedexes) =>
          pokedexes.map((pokedex) => ({
            id: extractIdFromEndOfUrl(pokedex.url),
            url: pokedex.url,
            data: null,
          }))
        ),
        mergeMap((urls) => {
          // first map all the observales to make an array for API calls
          let apiArray = urls.map((id) => {
            return this.getPokedexById(id.id);
          });
          // now you have to make API calls
          return forkJoin(...apiArray).pipe(
            map((apiData) => {
              console.log("apidata", apiData);
              // now modify your result to contain the data from API
              // apiData will be an array conating results from API calls
              // **note:** forkJoin will return the data in the same sequence teh requests were sent so doing a `forEach` works here
              urls.forEach((eachOriginalValue, index) => {
                eachOriginalValue.data = apiData[index]; // use the key in which you get data from API
              });
              return urls;
            }),
            catchError((e) => {
              console.log("error", e);
              return of(e);
            })
          );
        }),
        map((data) => data.map((d: any) => d.data))
      );
  }
}
