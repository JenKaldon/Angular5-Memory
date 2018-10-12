import { Component, OnInit, Input } from '@angular/core';
import { BoardGeneratorService } from '../board-generator.service';

/**
 * This component will one day clear the Memory board state.
 */
@Component({
  selector: 'app-clear-button',
  templateUrl: './clear-button.component.html',
  styleUrls: ['./clear-button.component.css']
})
export class ClearButtonComponent implements OnInit {
   @Input() private clearButton: any;
  constructor(private boardGeneratorService: BoardGeneratorService) { }

  ngOnInit() {
  }

  onClick(){
    this.boardGeneratorService.createBoard()
  }

}
