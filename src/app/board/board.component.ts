import { Component, OnInit } from '@angular/core';
import { BoardGeneratorService } from "../board-generator.service";
import { TileData } from '../tile-data';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  private rows:number;
  private cols:number;
  private board:TileData[][];
  private selections:TileData[] = [];

  constructor(private boardGeneratorService: BoardGeneratorService) {
  }
  
  ngOnInit() {
    this.rows=6;
    this.cols=4;
    this.board = this.boardGeneratorService.createBoard(this.rows,this.cols);
  }
  onSelected(tileData) {
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

