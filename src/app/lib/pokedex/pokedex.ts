export interface Pokedex {
  gameVersion: number[];
  // this data exists but isn't necessary yet..
  // descriptions: {
  //   description: string;
  //   language: {
  //     name: string;
  //     url: string;
  //   };
  // }[];
  id: number;
  is_main_series?: boolean;
  name: string;
  // todo: the name string is duplicated, how can i efficiently factory it from the pokemon ad hoc?
  pokemon: { entry: number; id: number; name: string }[];
}
