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
import { pokemonSpeciesReducer } from "./state/pokemon-species.reducer";
import { routerReducer, StoreRouterConnectingModule } from "@ngrx/router-store";
import { APP_INDEXED_DB_CONFIG } from "./lib/indexed-db/indexed-db.config";
import { pokemonReducer } from "./state/pokemon.reducer";

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
      pokemonSpecies: pokemonSpeciesReducer,
      pokemon: pokemonReducer,
    }),
    NgxIndexedDBModule.forRoot(APP_INDEXED_DB_CONFIG),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
