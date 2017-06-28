import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { TicTacToeDataService, TicTacToeDataServiceFactory } from '../tic-tac-toe-data/tic-tac-toe-data.service';
import { Game } from '../tic-tac-toe-data/game.model';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  @Output()
  onGameSelected = new EventEmitter<Game>();

  private service: TicTacToeDataService;
  private games: Game[];
  private selectedGame: Game;
  private creatingGame: boolean;
  private deletingGame: boolean;

  constructor(private factory: TicTacToeDataServiceFactory) {
    this.service = factory.create('http://localhost:3000');
  }

  ngOnInit() {
    this.service
      .getGames()
      .subscribe(games => this.games = games);
  }

  handlePlay([row, column]: number[]): void {
    if (this.selectedGame.winner !== undefined) {
      return;
    }
    this.service
      .playInSquare(this.selectedGame.id, row, column)
      .subscribe(game => {
        let index = this.games
          .findIndex(g => g.id === this.selectedGame.id);
        this.games[index].board = game.board;
        this.games[index].winner = game.winner;
      });
  }

  newGame(): void {
    this.creatingGame = true;
  }

  cancelNewGame(): void {
    this.creatingGame = false;
  }

  private deleteGame(game: Game) {
    if (game.winner === undefined) {
      return;
    }
    this.deletingGame = true;

    this.service
      .destroy(game.id)
      .subscribe(() => {
        let index = this.games
          .findIndex(g => g.id === game.id);
        this.games.splice(index, 1);

        if (this.selectedGame.id === game.id) {
          this.selectedGame = null;
          this.onGameSelected.emit(this.selectedGame);
        }
      });
  }

  private createGame(humanMovesFirst) {
    this.creatingGame = false;
    this.service
      .create(humanMovesFirst)
      .subscribe(games => {
        this.games = games;
        this.gameClicked(games[games.length - 1]);
      });
  }

  private gameClicked(game: Game) {
    if (this.deletingGame) {
      this.deletingGame = false;
      return;
    }
    if (this.selectedGame === game) {
      this.selectedGame = null;
    } else {
      this.selectedGame = game;
    }
    this.onGameSelected.emit(this.selectedGame);
  }

  private isSelected(game: Game): boolean {
    return this.selectedGame &&
           game.id === this.selectedGame.id;
  }

}
