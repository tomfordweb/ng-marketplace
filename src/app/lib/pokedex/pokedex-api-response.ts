import { Pokedex } from "./pokedex";

export interface PokedexApiResponse {
  id: number;
  // I added this value to link multiple pokedexes with game version, this
  // is done in the request
  gameVersion: number;
  is_main_series: boolean;
  name: string;
  names: { name: string; language: { name: string; url: string } }[];
  descriptions: {
    description: string;
    language: { name: string; url: string };
  }[];
  pokemon_entries: {
    entry_number: 1;
    pokemon_species: {
      name: string;
      url: string;
    };
  }[];
}
