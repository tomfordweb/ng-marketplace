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
import { GameVersionModule } from "./lib/game-version/game-version.module";
import { pokedexReducer } from "./state/pokedex.reducer";
import { pokemonReducer } from "./state/pokemon.reducer";
import { routerReducer, StoreRouterConnectingModule } from "@ngrx/router-store";

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
    {
      store: "pokedex",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "name", keypath: "name", options: { unique: true } },
        {
          name: "entry_number",
          keypath: "entry_number",
          options: { unique: true },
        },
        {
          name: "is_main_series",
          keypath: "is_main_series",
          options: { unique: false },
        },
        { name: "pokemon", keypath: "pokemon", options: { unique: false } },
        {
          name: "descriptions",
          keypath: "descriptions",
          options: { unique: false },
        },
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
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot({
      gameVersions: gameVersionsReducer,
      pokedex: pokedexReducer,
      router: routerReducer,
      pokemon: pokemonReducer,
    }),
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
