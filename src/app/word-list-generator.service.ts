
export class WordListGeneratorService {

  constructor() { }
  public static generateWordList(rows:number, cols:number){
    // console.log("In generateWordList()")
    var numSquares:number = rows * cols;
    var numWords = Math.floor(numSquares / 2);
    if(numWords * 2 != numSquares){
      alert("Rows * Cols must be an even number");        
    }
    var wordList:any[]=[];
    for(var i=0; i<numWords; i++){
      wordList.push(i);  
    }
    wordList = wordList.concat(wordList)
    
    // rendomize wordList
    for(var i = wordList.length -1; i>0; i--){
      var j = Math.floor(Math.random() * (i+1));
      var randomWord = wordList[j];
      wordList[j] = wordList[i];
      wordList[i] = randomWord;
    }
    // console.log(`WordList=${wordList}`)
    return wordList;
  }
}
