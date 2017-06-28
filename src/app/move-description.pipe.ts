import { Pipe, PipeTransform } from '@angular/core';

import { Game } from './tic-tac-toe-data/game.model';

@Pipe({
  name: 'moveDescription',
  pure: false
})
export class MoveDescriptionPipe implements PipeTransform {

  transform(game: Game): string {
    let count = [].concat(...game.board)
      .map(play => play === null? 0 : 1)
      .reduce((acc, value) => acc + value, 0);

    return count === 1 ?
           `${count} move made` :
           count === 0 ?
             'no moves made, yet' :
             `${count} moves made`;
  }

}
