import { HttpParams } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { EMPTY, of, throwError } from "rxjs";
import { filter, switchMap, tap } from "rxjs/operators";
import { PokemonSpeciesService } from "src/app/lib/pokemon-species/pokemon-species.service";
import { retreivedPokemon } from "src/app/state/pokemon.actions";
import { selectActivePokemonByRouterParam } from "src/app/state/pokemon.selector";
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
      if (!!params.versionPokemon) {
        return this.pokemonSpeciesService.getByPokemonId$(
          parseInt(params.versionPokemon)
        );
      }
      return EMPTY;
    }),
    tap((PokemonApi) => this.store.dispatch(retreivedPokemon({ PokemonApi })))
  );
  constructor(
    private pokemonSpeciesService: PokemonSpeciesService,
    private store: Store
  ) {}

  ngOnInit(): void {}
}
