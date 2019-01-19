import { Component, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('newGame') newGame;
  constructor(private boardGeneratorService: BoardGeneratorService) {
  }

  ngOnInit() {
    this.onNewGame(new BoardSize(6, 4));
  }
  onSelected(tileData: TileData) {
    this.boardGeneratorService.selectTile(tileData);
    if (this.boardGeneratorService.gameWon()) {
      alert('You Won!!!');
    }

  }

  onClearBoard() {
    this.boardGeneratorService.createBoard().subscribe(board => this.board = board);
  }

  onNewBoard() {
    this.newGame.showModal();
  }

  onNewGame(boardSize: BoardSize) {
    this.boardGeneratorService.setBoardSize(boardSize);
    this.boardGeneratorService.createBoard().subscribe(board => this.board = board);
  }
}


