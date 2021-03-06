import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { of } from "rxjs";
import { pluck, switchMap, take, tap } from "rxjs/operators";
import { GameVersion } from "../lib/game-version/game-version";
import { PokedexApiResponse } from "../lib/pokedex/pokedex-api-response";
import { PokedexService } from "../lib/pokedex/pokedex.service";
import { setActiveGameVersion } from "../state/game-versions.actions";
import { selectGameVersionByName } from "../state/game-versions.selector";
import { retreivedPokedexContents } from "../state/pokedex.actions";

@Component({
  selector: "app-pokedex",
  templateUrl: "./pokedex.component.html",
  styleUrls: ["./pokedex.component.scss"],
})
export class PokedexComponent implements OnInit {
  currentPokedex$ = of([]);

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokedexService: PokedexService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        pluck("params", "version"),
        switchMap((data) =>
          this.store
            .pipe(select(selectGameVersionByName, { name: data as string }))
            .pipe(
              take(1),
              tap((GameVersion: GameVersion) => {
                this.store.dispatch(setActiveGameVersion({ GameVersion }));
              })
            )
        ),
        switchMap((gameVersion: GameVersion) =>
          this.pokedexService.getPokedexByGameVersion$(gameVersion)
        ),
        tap((PokedexApiResponse: PokedexApiResponse) => {
          this.store.dispatch(retreivedPokedexContents({ PokedexApiResponse }));
          // this.store.dispatch(retreiveGameVersionList({ GameVersions }));
        })
      )
      .subscribe();
  }
}
