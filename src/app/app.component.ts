import { Component, ViewChild } from '@angular/core';
import { BoardSize } from './board-size';
import { BoardComponent } from './board/board.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'memory-app';
  @ViewChild('boardComponent') board: BoardComponent;
  onNewGame(boardSize: BoardSize) {
    this.board.newGame(boardSize);
  }
}

