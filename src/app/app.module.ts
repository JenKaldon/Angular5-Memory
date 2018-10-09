import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MemoryButtonComponent } from './memory-button/memory-button.component';
import { HttpClientModule } from '@angular/common/http';
import { MemoryBoardComponent } from './memory-board/memory-board.component';

@NgModule({
  declarations: [
    AppComponent,
    MemoryButtonComponent,
    MemoryBoardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

