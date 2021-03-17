import { IndexedDbConfig } from "../../indexed-db-config";

export const POKEMON_SPECIES_INDEXED_DB_CONFIG: IndexedDbConfig = {
  key: "pokemonSpecies",
};

export const PokemonSpeciesIndexedDb = {
  store: "pokemonSpecies",
  storeConfig: { keyPath: "id", autoIncrement: true },
  storeSchema: [
    { name: "name", keypath: "name", options: { unique: true } },
    {
      name: "url",
      keypath: "url",
      options: { unique: true },
    },
    {
      name: "base_happiness",
      keypath: "base_happiness",
      options: { unique: false },
    },
    {
      name: "has_gender_differences",
      keypath: "has_gender_differences",
      options: { unique: false },
    },
    {
      name: "hatch_counter",
      keypath: "hatch_counter",
      options: { unique: false },
    },
    {
      name: "is_baby",
      keypath: "is_baby",
      options: { unique: false },
    },
    {
      name: "is_legendary",
      keypath: "is_legendary",
      options: { unique: false },
    },
    {
      name: "is_mythical",
      keypath: "is_mythical",
      options: { unique: false },
    },
    {
      name: "names",
      keypath: "names",
      options: { unique: false },
    },
    {
      name: "order",
      keypath: "order",
      options: { unique: false },
    },
    {
      name: "pal_park_encounters",
      keypath: "pal_park_encounters",
      options: { unique: false },
    },
    {
      name: "pokedex_numbers",
      keypath: "pokedex_numbers",
      options: { unique: false },
    },
    {
      name: "shape",
      keypath: "shape",
      options: { unique: false },
    },
    {
      name: "varieties",
      keypath: "varieties",
      options: { unique: false },
    },
    {
      name: "form_descriptions",
      keypath: "form_descriptions",
      options: { unique: false },
    },
    {
      name: "forms_switchable",
      keypath: "forms_switchable",
      options: { unique: false },
    },
    {
      name: "gender_rate",
      keypath: "gender_rate",
      options: { unique: false },
    },
    {
      name: "capture_rate",
      keypath: "capture_rate",
      options: { unique: false },
    },
    {
      name: "color",
      keypath: "color",
      options: { unique: false },
    },
    {
      name: "egg_groups",
      keypath: "egg_groups",
      options: { unique: false },
    },
    {
      name: "evolution_chain",
      keypath: "evolution_chain",
      options: { unique: false },
    },
    {
      name: "evolves_from_species",
      keypath: "evolves_from_species",
      options: { unique: false },
    },
    {
      name: "flavor_text_entries",
      keypath: "flavor_text_entries",
      options: { unique: false },
    },
    {
      name: "genera",
      keypath: "genera",
      options: { unique: false },
    },
    {
      name: "generation",
      keypath: "generation",
      options: { unique: false },
    },
    {
      name: "growth_rate",
      keypath: "growth_rate",
      options: { unique: false },
    },
    {
      name: "habitat",
      keypath: "habitat",
      options: { unique: false },
    },
  ],
};
