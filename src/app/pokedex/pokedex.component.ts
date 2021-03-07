import { Component, OnInit } from "@angular/core";
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterEvent,
} from "@angular/router";
import { select, Store } from "@ngrx/store";
import { of } from "rxjs";
import { filter, map, pluck, switchMap, take, tap } from "rxjs/operators";
import { GameVersion } from "../lib/game-version/game-version";
import { PokedexApiResponse } from "../lib/pokedex/pokedex-api-response";
import { PokedexService } from "../lib/pokedex/pokedex.service";
import {
  selectGameVersionByRouterParam,
  selectGameVersions,
} from "../state/game-versions.selector";
import { retreivedPokedexContents } from "../state/pokedex.actions";
import { retrievedPokemonInformationFromPokedexResponse } from "../state/pokemon.actions";
import { selectActivePokedexByGameVersionRouterParam } from "../state/pokedex.selector";

@Component({
  selector: "app-pokedex",
  templateUrl: "./pokedex.component.html",
  styleUrls: ["./pokedex.component.scss"],
})
export class PokedexComponent implements OnInit {
  allPokemonGames$ = this.store.pipe(select(selectGameVersions));

  currentGame$ = this.store.pipe(select(selectGameVersionByRouterParam));

  currentPokedex$ = this.currentGame$.pipe(
    switchMap((data) =>
      this.store.pipe(
        select(selectActivePokedexByGameVersionRouterParam),
        tap((pokedex) => console.log("pd", pokedex))
      )
    )
  );
  // take the current game version based on router params
  // and then grab the pokedex relative the the :version router param
  pokedexRequest$ = this.currentGame$.pipe(
    switchMap((gameVersion: GameVersion) => {
      // Now that we have our GameVersion, get the Pokedex
      return this.pokedexService.getPokedexByGameVersion$(gameVersion).pipe(
        tap((responses: PokedexApiResponse[]) => {
          responses.forEach((PokedexApiResponse) => {
            // Update pokedex stores with response information
            this.store.dispatch(
              retreivedPokedexContents({ PokedexApiResponse })
            );
            // We actually receive really basic pokemon information here as well
            // update this so we can use it in components
            this.store.dispatch(
              retrievedPokemonInformationFromPokedexResponse({
                PokedexApiResponse,
              })
            );
          });
        })
      );
    })
  );

  ngOnInit(): void {}
  constructor(
    private pokedexService: PokedexService,
    private store: Store,
    private activatedRoute: Router
  ) {}
}
