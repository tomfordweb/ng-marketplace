import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GameVersionsApiResponse } from './interfaces/gane-versions-api-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-marketplace';
  gameVersions$ = this.httpClient.get<GameVersionsApiResponse>('https://pokeapi.co/api/v2/version-group')
  constructor(private httpClient: HttpClient ) { }
}
