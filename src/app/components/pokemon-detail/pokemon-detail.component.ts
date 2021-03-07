import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { of, throwError } from "rxjs";
import { filter, switchMap, tap } from "rxjs/operators";
import { PokemonService } from "src/app/lib/pokemon/pokemon.service";
import { selectActivePokemonByRouterParam } from "src/app/state/pokemon.selector";

@Component({
  selector: "app-pokemon-detail",
  templateUrl: "./pokemon-detail.component.html",
  styleUrls: ["./pokemon-detail.component.scss"],
})
export class PokemonDetailComponent implements OnInit {
  pokemon$ = this.store.pipe(
    select(selectActivePokemonByRouterParam),
    filter((pokemon) => pokemon !== undefined),
    switchMap((pokemon) => {
      console.log(pokemon);
      return this.pokemonService.getPokemonById(pokemon.id);
    })
  );
  constructor(private pokemonService: PokemonService, private store: Store) {}

  ngOnInit(): void {}
}
