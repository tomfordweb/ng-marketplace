import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";

import { of, Observable, EMPTY } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { INDEXED_DB_CONFIG } from "../../tokens";
import { IndexedDbConfig } from "../../indexed-db-config";
import { CachedRequestService } from "../../cached-request.service";
import { PokemonSpecies } from "./pokemon-species";
import { POKEMON_SPECIES_INDEXED_DB_CONFIG } from "./pokemon-species.indexed-db";
@Injectable()
export class PokemonSpeciesService {
  constructor(
    private cachedRequestService: CachedRequestService,
    private http: HttpClient
  ) {}

  getByName$(pokemonName: IDBValidKey): Observable<PokemonSpecies> {
    return (
      this.cachedRequestService
        // attempt to get from cache
        .getByProperty$(POKEMON_SPECIES_INDEXED_DB_CONFIG, "name", pokemonName)
        .pipe(
          catchError((error) => {
            // If we failed to retreive it from the cache, return the api request
            return this.http
              .get<PokemonSpecies>(
                `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`
              )
              .pipe(
                // store the data in indexeddb!
                tap((pokemonResponse: PokemonSpecies) =>
                  this.cachedRequestService.updateEntity$(
                    POKEMON_SPECIES_INDEXED_DB_CONFIG,
                    pokemonResponse
                  )
                )
              );
          })
        )
    );
  }
  getById$(pokemonId: number): Observable<PokemonSpecies> {
    return (
      this.cachedRequestService
        // attempt to get from cache
        .getById$(POKEMON_SPECIES_INDEXED_DB_CONFIG, pokemonId)
        .pipe(
          catchError((error) => {
            // If we failed to retreive it from the cache, return the api request
            return this.http
              .get<PokemonSpecies>(
                `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
              )
              .pipe(
                // store the data in indexeddb!
                tap((pokemonResponse: PokemonSpecies) =>
                  this.cachedRequestService.updateEntity$(
                    POKEMON_SPECIES_INDEXED_DB_CONFIG,
                    pokemonResponse
                  )
                )
              );
          })
        )
    );
  }
}
