import { Component, OnInit } from "@angular/core";
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterEvent,
} from "@angular/router";
import { select, Store } from "@ngrx/store";
import { of } from "rxjs";
import {
  filter,
  map,
  pluck,
  switchMap,
  take,
  takeWhile,
  tap,
} from "rxjs/operators";
import { GameVersion } from "../lib/game-version/game-version";
import { PokedexApiResponse } from "../lib/pokedex/pokedex-api-response";
import { PokedexService } from "../lib/pokedex/pokedex.service";
import {
  selectGameVersionByRouterParam,
  selectGameVersions,
} from "../state/game-versions.selector";
import {
  retreivedAllPokedexesForGame,
  retreivedPokedexContents,
} from "../state/pokedex.actions";
import { retrievedPokemonInformationFromMultiplePokedexResponse } from "../state/pokemon.actions";
import { selectActivePokedexByGameVersionRouterParam } from "../state/pokedex.selector";

@Component({
  selector: "app-pokedex",
  templateUrl: "./pokedex.component.html",
  styleUrls: ["./pokedex.component.scss"],
})
export class PokedexComponent implements OnInit {
  allPokemonGames$ = this.store.pipe(select(selectGameVersions));

  currentGame$ = this.store.pipe(select(selectGameVersionByRouterParam));

  // take the current game version based on router params
  // and then grab the pokedex relative the the :version router param
  currentPokedexes$ = this.currentGame$.pipe(
    switchMap((gameVersion: GameVersion) => {
      // Now that we have our GameVersion, get the Pokedex
      return this.pokedexService.getPokedexByGameVersion$(gameVersion).pipe(
        tap((MultiplePokedexApiResponse) => {
          this.store.dispatch(
            retreivedAllPokedexesForGame({ MultiplePokedexApiResponse })
          );
          this.store.dispatch(
            retrievedPokemonInformationFromMultiplePokedexResponse({
              MultiplePokedexApiResponse,
            })
          );
        })
      );
    }),
    switchMap((data) => {
      return this.store.pipe(
        select(selectActivePokedexByGameVersionRouterParam),
        filter((pd) => pd !== null)
      );
    })
  );

  // currentPokedex$ = this.pokedexRequest$.pipe(
  //   tap((current) => console.log("current pokedex changed", current))
  // );
  ngOnInit(): void {}
  constructor(
    private pokedexService: PokedexService,
    private store: Store,
    private activatedRoute: Router
  ) {}
}
