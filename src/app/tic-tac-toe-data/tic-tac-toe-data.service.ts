import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Game } from './game.model';

export interface Error {
  message: string
}

export interface MoveError extends Error {
  row: number,
  column: number
}

export class TicTacToeDataService {
  constructor(private server: string, private http: Http) {}

  getGames(): Observable<Game[]> {
    return this.http
      .get(`${this.server}/games`)
      .map(response => response.json());
  }

  create(humanMovesFirst: boolean): Observable<Game[]> {
    return this.http
      .post(`${this.server}/games`, { humanMovesFirst })
      .map(response => response.json());
  }

  get(id: number): Observable<Game> {
    return this.http
      .get(`${this.server}/games/${id}`)
      .map(response => response.json());
  }

  destroy(id: number): Observable<Game[]> {
    return this.http
      .delete(`${this.server}/games/${id}`)
      .map(response => ({}));
  }

  playInSquare(gameId: number, row: number, column: number): Observable<Game> {
    return this.http
      .patch(`${this.server}/games/${gameId}`, {
        instruction: 'move',
        row,
        column
      })
      .map(response => response.json());
  }
}

@Injectable()
export class TicTacToeDataServiceFactory {
  constructor(private http: Http) {}

  create(serverUrl: string) {
    return new TicTacToeDataService(serverUrl, this.http);
  }
}
