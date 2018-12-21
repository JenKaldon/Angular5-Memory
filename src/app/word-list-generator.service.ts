import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TileData } from './tile-data';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WordListGeneratorService {
  constructor(
    private http: HttpClient
  ) { }

  public generateWordList(rows: number, cols: number): Observable<string[]> {
    const numWords = this.getNumWords(rows, cols);
    const wordListObservable = this.getWords(numWords);
    return wordListObservable.pipe<string[]>(map((wordList: string[]) => {
      return wordList.concat(wordList);
    }));
  }

  public getNumWords(rows: number, cols: number) {
    const numSquares: number = rows * cols;
    const numWords = Math.floor(numSquares / 2);
    if (numWords * 2 !== numSquares) {
      alert('Rows * Cols must be an even number');
    }
    return numWords;
  }

  public getWords(numWords: number): Observable<string[]> {
    const url = 'http://localhost:8080/api/v1/words?numWords=' + numWords.toString();
    return this.http.get<string[]>(url);

  }

  public randomizeWordList(wordList: string[]) {
    // rendomize wordList
    for (let i = wordList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const randomWord = wordList[j];
      wordList[j] = wordList[i];
      wordList[i] = randomWord;
    }
    return wordList;
  }
}
