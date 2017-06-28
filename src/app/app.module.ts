import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { TicTacToeDataServiceFactory } from './tic-tac-toe-data/tic-tac-toe-data.service';
import { FabComponent } from './fab/fab.component';
import { GamesUiComponent } from './games-ui/games-ui.component';
import { GamesListComponent } from './games-list/games-list.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { SubheaderComponent } from './subheader/subheader.component';

@NgModule({
  declarations: [
    AppComponent,
    FabComponent,
    GamesUiComponent,
    GamesListComponent,
    GameBoardComponent,
    SubheaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [TicTacToeDataServiceFactory],
  bootstrap: [AppComponent]
})
export class AppModule { }
