import { Pokedex } from "./pokedex";

export interface PokedexApiResponse {
  id: number;
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
