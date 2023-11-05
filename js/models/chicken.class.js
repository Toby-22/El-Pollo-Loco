/**
 * This class represents a chicken enemy object that inherits from a movable object.
 */
class Chicken extends MovableObject {
  IMAGES_WALKING = [
    "img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];
  IMAGES_DEAD = ["img/3_enemies_chicken/chicken_normal/2_dead/dead.png"];
  dead_sound = new Audio("sounds/chicken_death.mp3");

  constructor() {
    super().loadImage("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.x = 500 + Math.random() * 3200;
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_DEAD);
    this.animate();
    this.speed = 0.15 + Math.random() * 0.2;
    this.energy = 5;
  }

  runningIntervalId;
  animationIntervalId;

  /**
   * this function animates the chicken on the canvas
   */
  animate() {
    this.runningIntervalId = setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);

    this.animationIntervalId = setInterval(() => {
      if (this.isDead()) {
        this.dead_sound.play();
        this.playAnimation(this.IMAGES_DEAD);
        clearInterval(this.runningIntervalId);
        this.chickenFallOutScreen();
        clearInterval(this.animationIntervalId);
      } else {
        this.playAnimation(this.IMAGES_WALKING);
      }
    }, 100);
  }

  /**
   * this function let a death chicken foll out from the screen
   */
  chickenFallOutScreen() {
    setInterval(() => {
      this.y += 20;
    }, 100);
  }
}
