export class TileData {
    public wordFound: Boolean;
    public isSelected: Boolean;
    constructor(public row, public col, public buttonWord) {
        this.wordFound = false;
        this.isSelected = false;
    }
}
