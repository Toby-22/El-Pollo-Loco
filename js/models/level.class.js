/**
 * This class represents a game level object.
 */
class Level {
  enemies;
  clouds;
  backgroundObjects;
  collectableCoins;
  collectableBottles;
  level_end_x = 3500;

  constructor(
    enemies,
    clouds,
    backgroundObjects,
    collectableCoins,
    collectableBottles
  ) {
    this.enemies = enemies;
    this.clouds = clouds;
    this.backgroundObjects = backgroundObjects;
    this.collectableCoins = collectableCoins;
    this.collectableBottles = collectableBottles;
  }
}
