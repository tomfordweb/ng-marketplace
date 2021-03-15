import { HttpParams } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { of, throwError } from "rxjs";
import { filter, switchMap, tap } from "rxjs/operators";
import { PokemonService } from "src/app/lib/pokemon/pokemon.service";
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
    switchMap((params) =>
      this.pokemonService.getPokemonById(params.versionPokemon)
    ),
    tap((PokemonApi) => this.store.dispatch(retreivedPokemon({ PokemonApi })))
  );
  constructor(private pokemonService: PokemonService, private store: Store) {}

  ngOnInit(): void {}
}
