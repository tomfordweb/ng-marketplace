import { Component, Input, OnInit } from "@angular/core";
import { Pokemon } from "src/app/lib/pokemon-species/pokemon";

@Component({
  selector: "app-pokemon-card",
  template: `<figure></figure>`,
  styleUrls: ["./pokemon-card.component.scss"],
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: Pokemon;

  constructor() {}

  ngOnInit(): void {}
}
