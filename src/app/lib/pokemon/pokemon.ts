import { GameVersion } from "../game-version/game-version";

export interface Pokemon {
  base_experience: number;
  name: string;
  order: number;
  past_types: unknown;
  weight: number;
  species: {
    name: string;
    url: string;
  };
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;

  sprites: {
    back_default?: string;
    back_female?: string;
    back_shiny?: string;
    back_shiny_female?: string;
    front_default?: string;
    front_female?: string;
    front_shiny?: string;
    front_shiny_female?: string;
    other: {
      dream_world?: {
        front_default?: string;
        front_female?: string;
      };
    };
  };
  stats: {
    [key: number]: {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      };
    };
  };
  types: {
    [key: number]: {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    };
  };
  held_items: {
    item: {
      name: string;
      url: string;
    };
    version_details: {
      rarity: number;
      version: {
        name: string;
        url: string;
      }[];
    };
  }[];

  moves: {
    move: {
      name: string;
      url: string;
    };
    version_group_details: {
      level_learned_at: number;
      move_learn_method: {
        name: string;
        url: string;
      };
      version_group: {
        name: string;
        url: string;
      };
    }[];
  }[];

  game_indicies: {
    game_index: number;
    version: {
      name: string;
      url: string;
    }[];
  };
  forms: {
    name: string;
    url: string;
  }[];

  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
}
