export interface Pokedex {
  gameVersion: number;
  // this data exists but isn't necessary yet..
  // descriptions: {
  //   description: string;
  //   language: {
  //     name: string;
  //     url: string;
  //   };
  // }[];
  id: number;
  is_main_series: boolean;
  name: string;
  pokemon: { entry: number; id: number }[];
}
