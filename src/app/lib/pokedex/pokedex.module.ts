import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { POKEDEX_INDEXED_DB_CONFIG } from "./pokedex.indexed-db";
import { INDEXED_DB_CONFIG } from "../../tokens";
import { GameVersionService } from "../game-version/game-version.service";
import { PokedexService } from "./pokedex.service";
import { VersionGroupModule } from "../version-group/version-group.module";

@NgModule({
  declarations: [],
  providers: [
    PokedexService,

    { provide: INDEXED_DB_CONFIG, useValue: POKEDEX_INDEXED_DB_CONFIG },
  ],
  imports: [CommonModule, VersionGroupModule],
})
export class PokedexLibModule {}
