import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { APP_INITIALIZER, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { StoreModule } from "@ngrx/store";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { gameVersionsReducer } from "./state/game-versions.reducer";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment"; // Angular CLI environment
import { DBConfig, NgxIndexedDBModule } from "ngx-indexed-db";
import { GameVersionModule } from "./game-version/game-version.module";

const dbConfig: DBConfig = {
  name: "MyDb",
  version: 1,
  objectStoresMeta: [
    {
      store: "gameVersions",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "name", keypath: "name", options: { unique: true } },
        { name: "url", keypath: "url", options: { unique: true } },
      ],
    },
  ],
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    GameVersionModule,
    AppRoutingModule,
    StoreModule.forRoot({ gameVersions: gameVersionsReducer }),
    NgxIndexedDBModule.forRoot(dbConfig),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
