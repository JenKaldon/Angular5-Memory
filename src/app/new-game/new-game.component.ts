import { Component, OnInit } from '@angular/core';
import { BoardGeneratorService} from '../board-generator.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {
  public rows:number;
  public cols:number;
  constructor(private boardGeneratorService: BoardGeneratorService) {
    this.rows=4;
    this.cols=6;
  }

  ngOnInit() {
  }

  onClick(){
    this.boardGeneratorService.setCols(this.cols);
    this.boardGeneratorService.setRows(this.rows);
    console.log(`Rows=${this.rows} Cols=${this.cols}`)
  }

}
