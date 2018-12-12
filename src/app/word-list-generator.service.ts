
export class WordListGeneratorService {
  constructor() { }

  public static generateWordList(rows: number, cols: number) {
    const numWords = this.getNumWords(rows, cols);

    let wordList: any[] = [];
    for (let i = 0; i < numWords; i++) {
      wordList.push(i);
    }
    wordList = wordList.concat(wordList);

    return this.randomizeWordList(wordList);
  }

  public static getNumWords(rows: number, cols: number) {
    // console.log("In getNumWords()")
    const numSquares: number = rows * cols;
    const numWords = Math.floor(numSquares / 2);
    if (numWords * 2 !== numSquares) {
      alert('Rows * Cols must be an even number');
    }
    return numWords;
  }

  private static randomizeWordList(wordList: any[]) {
    // rendomize wordList
    for (let i = wordList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const randomWord = wordList[j];
      wordList[j] = wordList[i];
      wordList[i] = randomWord;
    }
    // console.log(`WordList=${wordList}`)
    return wordList;
  }
}
