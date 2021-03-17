import { HttpParams } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { combineLatest, EMPTY, of, throwError } from "rxjs";
import { filter, switchMap, tap } from "rxjs/operators";
import { PokemonSpeciesService } from "src/app/lib/pokemon-species/pokemon-species.service";
import { PokemonService } from "src/app/lib/pokemon/pokemon.service";
import { retreivedPokemonSpeciesData } from "src/app/state/pokemon-species.actions";
import { selectActivePokemonByRouterParam } from "src/app/state/pokemon-species.selector";
import { retreivedPokemonData } from "src/app/state/pokemon.actions";
import { selectRouteParams } from "src/app/state/router.selectors";

@Component({
  selector: "app-pokemon-detail",
  templateUrl: "./pokemon-detail.component.html",
  styleUrls: ["./pokemon-detail.component.scss"],
})
export class PokemonDetailComponent implements OnInit {
  pokemon$ = this.store.pipe(
    select(selectActivePokemonByRouterParam),
    filter((pokemon) => pokemon !== undefined),
    tap((pmon) => console.log(pmon))
  );

  pokemonRequest$ = this.store.pipe(
    select(selectRouteParams),
    switchMap((params) => {
      const id = parseInt(params.versionPokemon);
      console.log({ params });
      if (!!params.pokemonName) {
        return combineLatest([
          this.pokemonService.getByName$(params.pokemonName),
          this.pokemonSpeciesService.getByName$(params.pokemonName),
        ]);
      }
      if (!!params.versionPokemon) {
        return combineLatest([
          this.pokemonService.getById$(id),
          this.pokemonSpeciesService.getById$(id),
        ]);
      }
      return EMPTY;
    }),
    tap(([Pokemon, PokemonSpecies]) => {
      this.store.dispatch(retreivedPokemonData({ Pokemon }));
      this.store.dispatch(retreivedPokemonSpeciesData({ PokemonSpecies }));
    })
  );
  constructor(
    private pokemonService: PokemonService,
    private pokemonSpeciesService: PokemonSpeciesService,
    private store: Store
  ) {}

  ngOnInit(): void {}
}
