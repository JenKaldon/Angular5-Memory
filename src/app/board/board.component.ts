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
  private previousSelection:TileData;

  constructor(private boardGeneratorService: BoardGeneratorService) {
  }
  
  ngOnInit() {
    this.rows=6;
    this.cols=4;
    this.board = this.boardGeneratorService.createBoard(this.rows,this.cols);
  }
  onSelected(tileData) {
    tileData.isSelected=true;
    console.log(tileData)
    
    // if two elements are selected check if they are the same.
    if(!this.previousSelection) {
      this.previousSelection = tileData;      
    } else { 
      if(this.previousSelection.buttonWord === tileData.buttonWord){
        this.previousSelection.wordFound=true;
        tileData.wordFound=true;
        
        
      } 
      this.previousSelection.isSelected=false;
      tileData.isSelected=false;
      // add method to redraw board
      this.previousSelection = null;
    }
  }
}

/**
 * ngOnInit() {
    this.svc.getPokemons().subscribe(data=> {
      this.pokemonData = data;
    })
  }
 */

