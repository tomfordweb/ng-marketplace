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
import { retreivedBasicSpeciesListFromPokedex } from "../state/pokemon-species.actions";
import { selectActivePokedexByGameVersionRouterParam } from "../state/pokedex.selector";

@Component({
  selector: "app-pokedex",
  templateUrl: "./pokedex.component.html",
  styleUrls: ["./pokedex.component.scss"],
})
export class PokedexComponent implements OnInit {
  allPokemonGames$ = this.store.pipe(select(selectGameVersions));

  currentGame$ = this.store.pipe(select(selectGameVersionByRouterParam));

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
