import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";

import { of, Observable, EMPTY } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { INDEXED_DB_CONFIG } from "../../tokens";
import { IndexedDbConfig } from "../../indexed-db-config";
import { CachedRequestService } from "../../cached-request.service";
import { Pokemon } from "./pokemon";

@Injectable()
export class PokemonService {
  constructor(
    @Inject(INDEXED_DB_CONFIG) private config: IndexedDbConfig,
    private cachedRequestService: CachedRequestService,
    private http: HttpClient
  ) {}

  getPokemonById(pokemonId: number): Observable<Pokemon> {
    return (
      this.cachedRequestService
        // attempt to get from cache
        .getById$(this.config, pokemonId)
        .pipe(
          catchError((error) => {
            // If we failed to retreive it from the cache, return the api request
            return this.http
              .get<Pokemon>(
                `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
              )
              .pipe(
                // store the data in indexeddb!
                tap((pokemonResponse: Pokemon) =>
                  this.cachedRequestService.updateEntity$(
                    this.config,
                    pokemonResponse
                  )
                )
              );
          })
        )
    );
  }
}
