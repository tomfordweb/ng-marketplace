import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { of } from "rxjs";
import { pluck, switchMap, take, tap } from "rxjs/operators";
import { GameVersion } from "../lib/game-version/game-version";
import { PokedexApiResponse } from "../lib/pokedex/pokedex-api-response";
import { PokedexService } from "../lib/pokedex/pokedex.service";
import { setActiveGameVersion } from "../state/game-versions.actions";
import {
  selectGameVersionByName,
  selectGameVersionByRouterParam,
} from "../state/game-versions.selector";
import { retreivedPokedexContents } from "../state/pokedex.actions";
import { retrievedPokemonInformationFromPokedexResponse } from "../state/pokemon.actions";
import { selectActivePokedexByGameVersionRouterParam } from "../state/pokedex.selector";

@Component({
  selector: "app-pokedex",
  templateUrl: "./pokedex.component.html",
  styleUrls: ["./pokedex.component.scss"],
})
export class PokedexComponent {
  currentPokedex$ = this.store.pipe(
    select(selectActivePokedexByGameVersionRouterParam),
    tap((pokedex) => console.log(pokedex))
  );

  // take the current game version based on router params
  // and then grab the pokedex relative the the :version router param
  pokedexRequest$ = this.store.pipe(
    select(selectGameVersionByRouterParam),
    switchMap((gameVersion: GameVersion) =>
      // Now that we have our GameVersion, get the Pokedex
      this.pokedexService.getPokedexByGameVersion$(gameVersion)
    ),
    tap((PokedexApiResponse: PokedexApiResponse) => {
      // Update pokedex stores with response information
      this.store.dispatch(retreivedPokedexContents({ PokedexApiResponse }));
      // We actually receive really basic pokemon information here as well
      // update this so we can use it in components
      this.store.dispatch(
        retrievedPokemonInformationFromPokedexResponse({
          PokedexApiResponse,
        })
      );
    })
  );

  constructor(private pokedexService: PokedexService, private store: Store) {}
}
