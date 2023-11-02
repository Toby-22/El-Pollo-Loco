class MovableObject extends DrawableObject{
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5;
  energy = 100;
  lastHit = 0;


  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  moveRight() {
    this.x += this.speed;
    this.otherDirection = false;
  }

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    if (this instanceof ThrowableObject){
      return true;
    }else{
    return this.y < 180;
  }
}

  jump() {
    this.speedY = 25;
  }

isColliding(mo) {
  return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
      this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
      this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
      this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
}

isCollidingFromTop(mo){
    return this.isColliding(mo) && 
    (Math.abs((this.y + this.height - this.offset.bottom) - (mo.y + mo.offset.top)) <= 50);
}

  hit(){
    this.energy -= 5;
    if(this.energy < 0){
      this.energy = 0;
    } else{
      this.lastHit = new Date().getTime();
    }
  }

  isDead(){
    return this.energy == 0;
  }

  isHurt(){
    let timepassed = new Date().getTime() - this.lastHit;
    return timepassed < 1000;
  }

  /**
 * creat a new Interval, which push it's id in the array intervalIds
 * @param {function} fn 
 * @param {integer} time 
 */
setSoppableInterval(fn, time){
  let intervalId = setInterval(fn, time);
  intervalIds.push(intervalId);
}


}
