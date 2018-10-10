import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TileData } from './tile-data';

@Injectable({
  providedIn: 'root'
})
export class BoardGeneratorService {
  private rows:any;
  private cols:any;
  private board:TileData[][];
  private wordList:any[];
  constructor() { 
  }
  public generateWordList(){
    console.log("In BoardGeneratorService.generateWordList()")
    if(this.wordList == null){
      var numSquares = this.rows * this.cols;
      var numWords = Math.floor(numSquares / 2);
      if(numWords * 2 != numSquares){
        alert("Rows * Cols must be an even number");        
      }
      var tempWordList:any[]=[];
      for(var i=0; i<numWords; i++){
        tempWordList.push(i);  
      }
      tempWordList = tempWordList.concat(tempWordList)
      
      // rendomize wordList
      for(var i = tempWordList.length -1; i>0; i--){
        var j = Math.floor(Math.random() * (i+1));
        var randomWord = tempWordList[j];
        tempWordList[j] = tempWordList[i];
        tempWordList[i] = randomWord;
      }
      this.wordList= tempWordList;
    }
  }
  
  

  public createBoard(rows,cols){
    this.rows=rows;
    this.cols=cols;
    this.generateWordList();    
    this.board=[];
    var wordListIndex = 0;
    for(var i=0;i<this.rows;i++ ){
      this.board.push([]);
      for(var j=0;j<this.cols;j++ ){
        this.board[i].push(new TileData(i,j, this.wordList[wordListIndex]));
        wordListIndex++;
      }
    }
    return this.board
  }
   public getBoard():TileData[][] {
     return this.board
   }
}
