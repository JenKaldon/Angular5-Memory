import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TileData } from './tile-data';

@Injectable({
  providedIn: 'root'
})
export class BoardGeneratorService {
  private rows:any;
  private cols:any;
  private board:TileData[][];

  constructor() { 
  }
  public createBoard(rows,cols){
    this.rows=rows;
    this.cols=cols;
    this.board=[];
    for(var i=0;i<this.rows;i++ ){
      this.board.push([]);
      for(var j=0;j<this.cols;j++ ){
        this.board[i].push(new TileData(i,j, `(${i}, ${j})`));
        console.log(this.board[i][j])
      }
    }
    return this.board
  }
   public getBoard():TileData[][] {
     return this.board
   }
}

/**
 * export class PokemonService {
  private url = "https://super-crud.herokuapp.com/pokemon";
  constructor(private http: HttpClient) { }
  public getPokemons():Observable<any> {
    return this.http.get<any>(this.url);
  }
}
 */