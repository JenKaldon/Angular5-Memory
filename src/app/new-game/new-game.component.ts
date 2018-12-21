import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { BoardGeneratorService} from '../board-generator.service';
import { BoardSize } from '../board-size';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {
  public numRows: number;
  public numCols: number;
  @ViewChild('newGameModal') public newGameModal;
  @Output() public newGame: EventEmitter<BoardSize> = new EventEmitter<BoardSize>();

  constructor(private boardGeneratorService: BoardGeneratorService) {
  }

  ngOnInit() {
  }

  public showModal() {
    this.numRows = 6;
    this.numCols = 4;
    this.newGameModal.show();
  }
  onSubmit() {
    const boardSize = new BoardSize(this.numRows, this.numCols);
    this.newGame.emit(boardSize);
    this.newGameModal.hide();
  }

}
