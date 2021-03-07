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
    console.log(currentGameVersion, allPokedexes);
    return (
      allPokedexes.filter(
        (pokedex) => pokedex.id === currentGameVersion.id
      )[0] || null
    );
  }
);
