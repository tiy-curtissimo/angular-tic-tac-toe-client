import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Game } from '../tic-tac-toe-data/game.model';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent {

  @Input()
  private game: Game;

  @Output()
  onPlayInSquare: EventEmitter<number[]>;

  constructor() {
    this.onPlayInSquare = new EventEmitter<number[]>();
  }

  playInSquare(rowIndex: number, colIndex: number): void {
    this.onPlayInSquare.emit([rowIndex, colIndex]);
  }

}
