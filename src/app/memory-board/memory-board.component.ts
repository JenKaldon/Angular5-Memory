import { Component, OnInit } from '@angular/core';
import { MemoryBoardService } from "../memory-board.service";
import { MemoryButtonData } from '../memory-button-data';
@Component({
  selector: 'app-memory-board',
  templateUrl: './memory-board.component.html',
  styleUrls: ['./memory-board.component.css']
})
export class MemoryBoardComponent implements OnInit {
  private rows:number;
  private cols:number;
  private board:MemoryButtonData[][];
  private previousSelection:MemoryButtonData;

  constructor(private memoryBoradService: MemoryBoardService) {
  }
  
  ngOnInit() {
    this.rows=6;
    this.cols=4;
    this.board = this.memoryBoradService.createBoard(this.rows,this.cols);
  }
  onSelected(memoryButtonData) {
    memoryButtonData.isSelected=true;
    console.log(memoryButtonData)
    
    // if two elements are selected check if they are the same.
    if(!this.previousSelection) {
      this.previousSelection = memoryButtonData;      
    } else { 
      if(this.previousSelection.buttonWord === memoryButtonData.buttonWord){
        this.previousSelection.wordFound=true;
        memoryButtonData.wordFound=true;
        
        
      } 
      this.previousSelection.isSelected=false;
      memoryButtonData.isSelected=false;
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

