import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TileData } from '../tile-data';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  private buttonValue: String;
  @Input() private tileData: TileData;
  @Output() public selected: EventEmitter<TileData>=new EventEmitter<TileData>();
  constructor() { 
  }

  onClick(){
    this.buttonValue=this.tileData.buttonWord;
    this.selected.emit(this.tileData);
  }
  ngOnInit() {
  }

}
