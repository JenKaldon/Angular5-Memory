Feature: TilePress

  Pressing a tile in memory-app results in the tileword being displayed
  Scenario: Click on Tile
    Given memory-app is loaded
    When tile at 1,1 is pressed
    Then tile at 1,1 should display word
        