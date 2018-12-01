import { Component, OnInit } from '@angular/core';
import { BoardGeneratorService } from '../board-generator.service';
import { TileData } from '../tile-data';
import { BoardSize } from '../board-size';
/**
 * This component generates a memory board filled with memory tiles.
 * This component uses the BoardGeneratorService
 */
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  public board: TileData[][];

  constructor(private boardGeneratorService: BoardGeneratorService) {
  }

  ngOnInit() {
    this.newGame(new BoardSize(6, 4));
  }
  onSelected(tileData) {
    this.boardGeneratorService.selectTile(tileData);
  }

  onClear() {
    this.board = this.boardGeneratorService.createBoard();
  }

  newGame(boardSize: BoardSize) {
    this.boardGeneratorService.setBoardSize(boardSize);
    this.board = this.boardGeneratorService.createBoard();
  }

}

