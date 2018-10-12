import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TileComponent } from './tile/tile.component';
import { BoardComponent } from './board/board.component';
import { ClearButtonComponent } from './clear-button/clear-button.component';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    BoardComponent,
    ClearButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

