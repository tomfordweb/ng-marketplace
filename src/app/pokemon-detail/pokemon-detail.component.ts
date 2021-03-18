import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { combineLatest, EMPTY } from "rxjs";
import { switchMap, tap } from "rxjs/operators";
import { PokemonSpeciesService } from "../lib/pokemon-species/pokemon-species.service";
import { PokemonService } from "../lib/pokemon/pokemon.service";
import { retreivedPokemonSpeciesData } from "../state/pokemon-species.actions";
import { retreivedPokemonData } from "../state/pokemon.actions";
import { selectRouteParams } from "../state/router.selectors";

@Component({
  selector: "app-pokemon-detail",
  template: ` <ng-container *ngIf="pokemonRequest$ | async"
    ><router-outlet></router-outlet
  ></ng-container>`,
  styleUrls: ["./pokemon-detail.component.scss"],
})
export class BasePokemonDetailComponent implements OnInit {
  pokemonRequest$ = this.store.pipe(
    select(selectRouteParams),
    switchMap((params) => {
      const id = parseInt(params.versionPokemon);
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
    private store: Store,

    private pokemonService: PokemonService,
    private pokemonSpeciesService: PokemonSpeciesService
  ) {}
  ngOnInit(): void {}
}
