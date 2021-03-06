import { Pokedex } from "./pokedex";

export interface PokedexApiResponse {
  id: string;
  is_main_series: boolean;
  name: string;
  names: { name: string; language: { name: string; url: string } }[];
  descriptions: { description: string; language: string; url: string }[];
  results: Pokedex[];
}
