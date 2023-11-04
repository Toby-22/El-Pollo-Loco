/**
 * This class represents a coin status object that inherits from a drawable object.
 */
class CoinStatus extends DrawableObject {
  IMAGES_COINS_STATUS = [
    "img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png",
  ];

  percentage = 0;
  maxCoins;

  constructor() {
    super();
    this.loadImages(this.IMAGES_COINS_STATUS);
    this.x = 20;
    this.y = 40;
    this.width = 150;
    this.height = 50;
    this.maxCoins = level1.collectableCoins.length;
    this.setCoinStatus(0);
  }

  /**
   * this function set the statusbar for coins after collected one
   * @param {number} collectedCoins
   */
  setCoinStatus(collectedCoins) {
    this.percentage = (100 * collectedCoins) / this.maxCoins;
    let path = this.IMAGES_COINS_STATUS[this.resolvedImageIndex()];
    this.img = this.imageCache[path];
  }

  /**
   * this function returns the img-id which represents the statusbar volume
   * @returns the index for the img
   */
  resolvedImageIndex() {
    if (this.percentage == 100) {
      return 5;
    } else if (this.percentage > 80) {
      return 4;
    } else if (this.percentage > 60) {
      return 3;
    } else if (this.percentage > 40) {
      return 2;
    } else if (this.percentage > 20) {
      return 1;
    } else {
      return 0;
    }
  }
}
