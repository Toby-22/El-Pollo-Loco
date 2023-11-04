/**
 * This class represents a movable object that inherits from a drawable object.
 */
class MovableObject extends DrawableObject {
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5;
  energy = 100;
  lastHit = 0;

  /**
   * this funciton animates a movable object
   * @param {URL} images
   */
  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  /**
   * this function let move a objet to the left side
   */
  moveLeft() {
    this.x -= this.speed;
  }

  /**
   * this function let move a objet to the right side
   */
  moveRight() {
    this.x += this.speed;
    this.otherDirection = false;
  }

  /**
   * this function applys a object gravity
   */
  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  /**
   * this function checks if a object is above the ground
   * @returns boolen
   */
  isAboveGround() {
    if (this instanceof ThrowableObject) {
      return true;
    } else {
      return this.y < 180;
    }
  }

  /**
   * this function let jump a objet
   */
  jump() {
    this.speedY = 25;
  }

  /**
   * This function checks whether two objects collide with each other
   * @param {object} mo
   * @returns boolean
   */
  isColliding(mo) {
    return (
      this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
      this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
      this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
      this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
    );
  }

  /**
   * this function checks it the character jumps on a enemy
   * @param {object} mo
   * @returns boolean
   */
  isCollidingFromTop(mo) {
    return (
      this.isColliding(mo) &&
      Math.abs(
        this.y + this.height - this.offset.bottom - (mo.y + mo.offset.top)
      ) <= 50
    );
  }

  /**
   * this function reduce enery of a object if it was hit
   */
  hit() {
    this.energy -= 5;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  /**
   * this function set the energy level of a object to 0% it it is dead.
   * @returns the energy level to 0%
   */
  isDead() {
    return this.energy == 0;
  }

  /**
   * this function check it a object hurts
   */
  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    return timepassed < 1000;
  }

  /**
   * creat a new Interval, which push it's id in the array intervalIds
   * @param {function} fn
   * @param {integer} time
   */
  setSoppableInterval(fn, time) {
    let intervalId = setInterval(fn, time);
    intervalIds.push(intervalId);
  }
}
