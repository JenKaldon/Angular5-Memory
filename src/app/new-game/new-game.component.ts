import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BoardGeneratorService} from '../board-generator.service';
import { BoardSize } from '../board-size';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {
  public rows: number;
  public cols: number;

  @Output() public newGame: EventEmitter<BoardSize> = new EventEmitter<BoardSize>();

  constructor(private boardGeneratorService: BoardGeneratorService) {
    this.rows = 4;
    this.cols = 6;
  }

  ngOnInit() {
  }

  onClick() {
    const boardSize = new BoardSize(this.rows, this.cols);
    this.newGame.emit(boardSize);
    console.log(`Rows=${this.rows} Cols=${this.cols}`);
  }

}
