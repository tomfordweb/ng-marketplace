import { createSelector } from "@ngrx/store";
import { GameVersion } from "../lib/game-version/game-version";
import { Pokedex } from "../lib/pokedex/pokedex";
import { selectGameVersionByRouterParam } from "./game-versions.selector";

export const selectPokedexes = createSelector(
  (state: any) => state.pokedex,
  (pokedex: Array<Pokedex>) => pokedex
);

export const selectActivePokedexByGameVersionRouterParam = createSelector(
  selectGameVersionByRouterParam,
  selectPokedexes,
  (currentGameVersion: GameVersion, allPokedexes: Pokedex[]) => {
    const returnData =
      allPokedexes.filter(
        (pokedex) => pokedex.gameVersion === currentGameVersion.id
      )[0] || null;
    return returnData;
  }
);
