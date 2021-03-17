export interface VersionGroup {
  id: number;
  generation: {
    name: string;
    url: string;
  };
  move_learn_methods: {
    name: string;
    url: string;
  }[];
  name: string;
  order: number;
  pokedexes: {
    name: string;
    url: string;
  }[];
  versions: {
    name: string;
    url: string;
  }[];
}
