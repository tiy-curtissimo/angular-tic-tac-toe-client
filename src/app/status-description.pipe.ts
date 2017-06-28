import { Pipe, PipeTransform } from '@angular/core';

import { Game } from './tic-tac-toe-data/game.model';

@Pipe({
  name: 'statusDescription',
  pure: false
})
export class StatusDescriptionPipe implements PipeTransform {

  transform(game: Game): string {
    if (game.winner === undefined && game.humanIndex === 0) {
      return "You moved first";
    } else if (game.winner === undefined) {
      return "Computer moved first";
    } else if (game.winner === -1) {
      return "You tied with a machine";
    } else if (game.humanIndex === game.winner) {
      return "You won!";
    }
    return "The computer won";
  }

}
