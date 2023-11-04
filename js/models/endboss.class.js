/**
 * this class represents a Endboss enemy.
 */
class Endboss extends MovableObject {
  height = 400;
  width = 250;
  y = 50;
  speed = 2;
  IMAGES_WALKING = [
    "img/4_enemie_boss_chicken/1_walk/G1.png",
    "img/4_enemie_boss_chicken/1_walk/G2.png",
    "img/4_enemie_boss_chicken/1_walk/G3.png",
    "img/4_enemie_boss_chicken/1_walk/G4.png",
  ];
  IMAGES_ALERT = [
    "img/4_enemie_boss_chicken/2_alert/G5.png",
    "img/4_enemie_boss_chicken/2_alert/G6.png",
    "img/4_enemie_boss_chicken/2_alert/G7.png",
    "img/4_enemie_boss_chicken/2_alert/G8.png",
    "img/4_enemie_boss_chicken/2_alert/G9.png",
    "img/4_enemie_boss_chicken/2_alert/G10.png",
    "img/4_enemie_boss_chicken/2_alert/G11.png",
    "img/4_enemie_boss_chicken/2_alert/G12.png",
  ];
  IMAGES_ATTACK = [
    "img/4_enemie_boss_chicken/3_attack/G13.png",
    "img/4_enemie_boss_chicken/3_attack/G14.png",
    "img/4_enemie_boss_chicken/3_attack/G15.png",
    "img/4_enemie_boss_chicken/3_attack/G16.png",
    "img/4_enemie_boss_chicken/3_attack/G17.png",
    "img/4_enemie_boss_chicken/3_attack/G18.png",
    "img/4_enemie_boss_chicken/3_attack/G19.png",
    "img/4_enemie_boss_chicken/3_attack/G20.png",
  ];
  IMAGES_HURT = [
    "img/4_enemie_boss_chicken/4_hurt/G21.png",
    "img/4_enemie_boss_chicken/4_hurt/G22.png",
    "img/4_enemie_boss_chicken/4_hurt/G23.png",
  ];
  IMAGES_DEAD = [
    "img/4_enemie_boss_chicken/5_dead/G24.png",
    "img/4_enemie_boss_chicken/5_dead/G25.png",
    "img/4_enemie_boss_chicken/5_dead/G26.png",
  ];
  energy = 40;
  kill_sound = new Audio("sounds/Endboss_kill.mp3");
  hurt_sound = new Audio("sounds/endboss_hurt.mp3");
  bog_sound = new Audio("sounds/endboss_bog.mp3");
  offset = {
    top: 0,
    left: 30,
    right: 0,
    bottom: 0,
  };

  constructor() {
    super().loadImage(this.IMAGES_WALKING[0]);
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_ATTACK);
    this.x = 2500;
    this.animate();
  }

  /**
   * this function animates the endboss object
   */
  animate() {
    let i = 0;
    setInterval(() => {
      if (this.isHurt()) {
        this.playAnimation(this.IMAGES_HURT);
        this.hurt_sound.play();
      } else if (this.isDead()) {
        this.playAnimation(this.IMAGES_DEAD);
        this.kill_sound.play();
        setTimeout(gameWon, 1200);
      } else if (world.character.x >= 2100) {
        console.log(i);
        if (i < 120) {
          this.playAnimation(this.IMAGES_ATTACK);
          this.bog_sound.play();
        } else {
          this.playAnimation(this.IMAGES_WALKING);
          this.bog_sound.play();
          this.moveLeft();
        }
      }
      i++;
    }, 50);
  }
}
