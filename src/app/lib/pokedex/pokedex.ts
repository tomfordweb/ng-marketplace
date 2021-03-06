export interface Pokedex {
  descriptions: {
    description: string;
    language: {
      name: string;
      url: string;
    };
  }[];
  id: number;
  is_main_series: boolean;
  name: string;
  entry_number: number;
  pokemon: number[];
}
