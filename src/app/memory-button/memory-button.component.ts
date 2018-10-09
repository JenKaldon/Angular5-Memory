import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MemoryButtonData } from '../memory-button-data';

@Component({
  selector: 'app-memory-button',
  templateUrl: './memory-button.component.html',
  styleUrls: ['./memory-button.component.css']
})
export class MemoryButtonComponent implements OnInit {
  private buttonValue: String;
  @Input() private memoryButtonData: MemoryButtonData;
  @Output() public selected: EventEmitter<MemoryButtonData>=new EventEmitter<MemoryButtonData>();
  constructor() { 
  }

  onClick(){
    this.buttonValue=this.memoryButtonData.buttonWord;
    this.selected.emit(this.memoryButtonData);
  }
  ngOnInit() {
  }

}
