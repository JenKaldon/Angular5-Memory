import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TileData } from './tile-data';
import { WordListGeneratorService } from './word-list-generator.service';
import { BoardSize } from './board-size';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BoardGeneratorService {
  private rows: number;
  private cols: number;
  private selections: TileData[];
  private numTilesVisible: number;

  constructor(private wordListGenerator: WordListGeneratorService) {
  }

  public setBoardSize(boardSize: BoardSize) {
    this.rows = boardSize.rows;
    this.cols = boardSize.cols;
  }

  public gameWon(): boolean {
    return this.numTilesVisible === this.rows * this.cols;
  }

  public createBoard(): Observable<TileData[][]> {
    this.selections = [];
    let wordListIndex = 0;
    this.numTilesVisible = 0;

    return this.wordListGenerator.generateWordList(this.rows, this.cols)
        .pipe<TileData[][]>(map((wordList: string[]) => {
          const board: TileData[][] = [];
          wordList = this.wordListGenerator.randomizeWordList(wordList);
          for (let i = 0; i < this.rows; i++ ) {
            board.push([]);
            for (let j = 0; j < this.cols; j++ ) {
              board[i].push(new TileData(i, j, wordList[wordListIndex]));
              wordListIndex++;
            }
          }
          return board;
        }));
  }

  public selectTile(tileData: TileData) {
    tileData.isSelected = true;
    this.selections.push(tileData);

    if (this.selections.length === 2) {
      if (this.selections[0].buttonWord === this.selections[1].buttonWord) {
        this.selections[0].wordFound = true;
        this.selections[1].wordFound = true;
        this.numTilesVisible += 2;
      }
    } else if (this.selections.length === 3) {
        // Unselect first two selections
        this.selections[0].isSelected = false;
        this.selections[1].isSelected = false;
        this.selections = new Array(tileData);
    }
  }
}
