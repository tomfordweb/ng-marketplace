import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { pluck, switchMap, take, tap } from "rxjs/operators";
import { selectActivePokemonByRouterParam } from "../state/pokemon.selector";

@Component({
  selector: "app-pokemon-detail",
  templateUrl: "./pokemon-detail.component.html",
  styleUrls: ["./pokemon-detail.component.scss"],
})
export class PokemonDetailComponent implements OnInit {
  pokemon$ = this.store.pipe(select(selectActivePokemonByRouterParam));
  constructor(private activatedRoute: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {}
}
