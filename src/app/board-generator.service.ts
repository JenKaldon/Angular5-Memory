import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TileData } from './tile-data';
import { WordListGeneratorService } from './word-list-generator.service';
import { BoardSize } from './board-size';

@Injectable({
  providedIn: 'root'
})
export class BoardGeneratorService {
  private rows: number;
  private cols: number;
  private selections: TileData[];

  constructor() {
  }

  public setBoardSize(boardSize: BoardSize) {
    this.rows = boardSize.rows;
    this.cols = boardSize.cols;
  }

  public createBoard() {
    this.selections = [];
    const board = [];
    let wordListIndex = 0;
    const wordList = WordListGeneratorService.generateWordList(this.rows, this.cols);
    for (let i = 0; i < this.rows; i++ ) {
      board.push([]);
      for (let j = 0; j < this.cols; j++ ) {
        board[i].push(new TileData(i, j, wordList[wordListIndex]));
        wordListIndex++;
      }
    }
    return board;
  }

  public selectTile(tileData: TileData) {
    // console.log(`In selectTile("${TileData}`);
    // console.log(this.selections)
    tileData.isSelected = true;
    this.selections.push(tileData);

    if (this.selections.length === 2) {
      if (this.selections[0].buttonWord === this.selections[1].buttonWord) {
        this.selections[0].wordFound = true;
        this.selections[1].wordFound = true;
      }
    } else if (this.selections.length === 3) {
        // Unselect first two selections
        this.selections[0].isSelected = false;
        this.selections[1].isSelected = false;
        this.selections = new Array(tileData);
    }
  }
}
