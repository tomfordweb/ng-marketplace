import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { of } from "rxjs";
import { pluck, switchMap, tap } from "rxjs/operators";
import { selectGameVersionByName } from "../state/game-versions.selector";

@Component({
  selector: "app-pokedex",
  templateUrl: "./pokedex.component.html",
  styleUrls: ["./pokedex.component.scss"],
})
export class PokedexComponent implements OnInit {
  pokemon$ = of([]);

  constructor(private activatedRoute: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        pluck("params", "version"),
        switchMap((data) =>
          this.store.pipe(
            select(selectGameVersionByName, { name: data as string })
          )
        ),
        tap((data) => {
          console.log("my data", data);
          // this.store.dispatch(retreiveGameVersionList({ GameVersions }));
        })
      )

      .subscribe();
  }
}
