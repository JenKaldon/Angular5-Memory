import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TileData } from './tile-data';
import { WordListGeneratorService } from './word-list-generator.service';

@Injectable({
  providedIn: 'root'
})
export class BoardGeneratorService {
  private rows:number;
  private cols:number;
  public board:TileData[][]
  private selections:TileData[];
  
  constructor() { 
  }
  
  public setRows(rows:number){
    this.rows = rows;
  }

  public setCols(cols:number){
    this.cols = cols;
  }

  public getBoard(){
    return this.board;
  }
  public createBoard(){
    this.selections=[]
    this.board=[];
    var wordListIndex = 0;
    var wordList = WordListGeneratorService.generateWordList(this.rows,this.cols);
    for(var i=0;i<this.rows;i++ ){
      this.board.push([]);
      for(var j=0;j<this.cols;j++ ){
        this.board[i].push(new TileData(i,j, wordList[wordListIndex]));
        wordListIndex++;
      }
    }
    return this.board
  }

  public selectTile(tileData:TileData){
    // console.log(`In selectTile("${TileData}`);
    // console.log(this.selections)
    tileData.isSelected=true;
    this.selections.push(tileData);      
    
    if (this.selections.length==2){ 
      if(this.selections[0].buttonWord === this.selections[1].buttonWord){
        this.selections[0].wordFound=true;
        this.selections[1].wordFound=true;
      } 
    } else if (this.selections.length==3){
        // Unselect first two selections
        this.selections[0].isSelected=false
        this.selections[1].isSelected=false
        this.selections = new Array(tileData)
    }
  }
}
