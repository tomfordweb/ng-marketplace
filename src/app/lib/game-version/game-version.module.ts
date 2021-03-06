import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GameVersionService } from "./game-version.service";
import { IndexedDbConfig } from "../../indexed-db-config";
import { GAME_VERSION_INDEXED_DB_CONFIG } from "./game-version.indexed-db";
import { INDEXED_DB_CONFIG } from "../../tokens";

@NgModule({
  declarations: [],
  providers: [
    GameVersionService,
    { provide: INDEXED_DB_CONFIG, useValue: GAME_VERSION_INDEXED_DB_CONFIG },
  ],
  imports: [CommonModule],
})
export class GameVersionModule {}
