export interface Pokemon {
  base_happiness: number;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  names: {
    name: string;
    language: {
      name: string;
      url: string;
    };
  }[];
  order: number;
  pal_park_encounters: {
    area: {
      name: string;
      url: string;
    };
    base_score: number;
    rate: number;
  }[];
  pokedex_numbers: {
    entry_number: number;
    pokedex: {
      name: string;
      url: string;
    };
  }[];
  shape: {
    name: string;
    url: string;
  };
  varieties: {
    is_default: boolean;
    pokemon: {
      name: string;
      url: string;
    };
  }[];
  form_descriptions: unknown[];
  forms_switchable: boolean;
  gender_rate: number;
  capture_rate: 45;
  color: { name: string; url: string };
  egg_groups: { name: string; url: string }[];
  evolution_chain: {
    url: string;
  };
  evolves_from_species: unknown;
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
      url: string;
    };
    version: {
      name: string;
      url: string;
    };
  }[];

  genera: {
    genus: string;
    language: {
      name: string;
      url: string;
    };
  }[];

  generation: {
    name: string;
    url: string;
  };
  growth_rate: {
    name: string;
    url: string;
  };
  habitat: {
    name: string;
    url: string;
  };

  name: string;
  url: string;
}
