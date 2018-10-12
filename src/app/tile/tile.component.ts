import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TileData } from '../tile-data';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  @Input() private tileData: TileData;
  @Output() public selected: EventEmitter<TileData>=new EventEmitter<TileData>();
  constructor() { 
  }

  onClick(){
    this.selected.emit(this.tileData);
  }
  ngOnInit() {
  }

}
