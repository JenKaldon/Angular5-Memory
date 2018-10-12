import { Component, OnInit } from '@angular/core';
import { BoardGeneratorService } from "../board-generator.service";
import { TileData } from '../tile-data';
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
  public board:TileData[][];
   
  constructor(private boardGeneratorService: BoardGeneratorService) {
  }
  
  ngOnInit() {
    this.boardGeneratorService.setRows(6);
    this.boardGeneratorService.setCols(4);
    this.board=this.boardGeneratorService.createBoard();
  }
  onSelected(tileData) {
    this.boardGeneratorService.selectTile(tileData);
  }
}

