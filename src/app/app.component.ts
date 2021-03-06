import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { tap } from "rxjs/operators";
import { GameVersionService } from "./lib/game-version/game-version.service";
import { GameVersionsApiResponse } from "./lib/game-version/gane-versions-api-response";
import { AppState } from "./state/app.state";
import { retreiveGameVersionList } from "./state/game-versions.actions";
import { selectGameVersions } from "./state/game-versions.selector";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "ng-marketplace";
  allPokemonGames$ = this.store.pipe(select(selectGameVersions));

  allPokemonGamesRequest$ = this.gameVersionsService
    .getGames()
    .pipe(
      tap((GameVersions) =>
        this.store.dispatch(retreiveGameVersionList({ GameVersions }))
      )
    );

  constructor(
    private gameVersionsService: GameVersionService,
    private store: Store<AppState>
  ) {}
}
