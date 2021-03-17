import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";

import { of, Observable, EMPTY } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { INDEXED_DB_CONFIG } from "../../tokens";
import { IndexedDbConfig } from "../../indexed-db-config";
import { CachedRequestService } from "../../cached-request.service";
import { Pokemon } from "./pokemon";
import { POKEMON_INDEXED_DB_CONFIG } from "./pokemon.indexed-db";
@Injectable()
export class PokemonService {
  constructor(
    private cachedRequestService: CachedRequestService,
    private http: HttpClient
  ) {}

  getById$(pokemonId: number): Observable<Pokemon> {
    return (
      this.cachedRequestService
        // attempt to get from cache
        .getById$(POKEMON_INDEXED_DB_CONFIG, pokemonId)
        .pipe(
          catchError((error) => {
            // If we failed to retreive it from the cache, return the api request
            return this.http
              .get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
              .pipe(
                // store the data in indexeddb!
                tap((pokemonResponse: Pokemon) =>
                  this.cachedRequestService.updateEntity$(
                    POKEMON_INDEXED_DB_CONFIG,
                    pokemonResponse
                  )
                )
              );
          })
        )
    );
  }

  getByName$(pokemonName: string): Observable<Pokemon> {
    return (
      this.cachedRequestService
        // attempt to get from cache
        .getByProperty$(POKEMON_INDEXED_DB_CONFIG, "name", pokemonName)
        .pipe(
          catchError((error) => {
            // If we failed to retreive it from the cache, return the api request
            return this.http
              .get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
              .pipe(
                // store the data in indexeddb!
                tap((pokemonResponse: Pokemon) =>
                  this.cachedRequestService.updateEntity$(
                    POKEMON_INDEXED_DB_CONFIG,
                    pokemonResponse
                  )
                )
              );
          })
        )
    );
  }
}
