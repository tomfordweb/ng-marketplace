import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { filter } from "rxjs/operators";
import { selectActivePokemonSpeciesByRouterParam } from "src/app/state/pokemon-species.selector";
import { selectActivePokemonByRouterParam } from "src/app/state/pokemon.selector";

@Component({
  selector: "app-pokemon-detail",
  templateUrl: "./pokemon-detail.component.html",
  styleUrls: ["./pokemon-detail.component.scss"],
})
export class PokemonDetailComponent implements OnInit {
  pokemonSpecies$ = this.store.pipe(
    select(selectActivePokemonSpeciesByRouterParam),
    filter((pokemon) => pokemon !== undefined)
  );

  pokemon$ = this.store.pipe(
    select(selectActivePokemonByRouterParam),
    filter((pokemon) => pokemon !== undefined)
  );
  constructor(private store: Store) {}

  ngOnInit(): void {}
}
