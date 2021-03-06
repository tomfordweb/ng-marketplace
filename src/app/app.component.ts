import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { GameVersionService } from "./game-version/game-version.service";
import { GameVersionsApiResponse } from "./game-version/gane-versions-api-response";
import { retreiveGameVersionList } from "./state/game-versions.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "ng-marketplace";

  constructor(
    private gameVersionsService: GameVersionService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.gameVersionsService.getGames().subscribe((GameVersion) => {
      this.store.dispatch(retreiveGameVersionList({ GameVersion }));
    });
  }
}
