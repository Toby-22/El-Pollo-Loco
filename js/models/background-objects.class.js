/**
 * This class represents a background object that inherits from a movable object.
 */
class BackgroundObject extends MovableObject {
  width = 720;
  height = 480;
  constructor(imagePath, x, y) {
    super().loadImage(imagePath);
    this.x = x;
    this.y = y;
  }
}
