/**
 * this class represents the world
 */
class World {
  character = new Character();
  statusbar = new StatusBar();
  coinStatusBar = new CoinStatus();
  bottleStatusBar = new BottleStatus(this.character);
  level = level1;
  ctx;
  canvas;
  keyboard;
  camera_x = 0;
  bottles = [];

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  }

  setWorld() {
    this.character.world = this;
  }

  /**
   * this function let run the game
   */
  run() {
    setInterval(() => {
      this.checkCollisions();
      this.checkJumpOnEnemy();
      this.checkThrowObjects();
      this.checkCollectBottle();
      this.checkCollectCoins();
      this.checkHitEnemyWithBottle();
    }, 100);
  }

  /**
   * this function checks if a object is throwen
   */
  checkThrowObjects() {
    if (this.keyboard.SPACE && this.character.bottles > 0) {
      let bottle = new ThrowableObject(
        this.character.x + 100,
        this.character.y + 50
      );
      this.bottles.push(bottle);
      this.character.bottles -= 1;
      this.bottleStatusBar.setBottleStatus(this.character.bottles);
    }
  }

  /**
   * this function checks if a enemy is collide with the character
   */
  checkCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (
        this.character.isColliding(enemy) &&
        !this.character.isCollidingFromTop(enemy) &&
        enemy.energy > 0
      ) {
        this.character.hit();
        this.statusbar.setPercentage(this.character.energy);
      }
    });
  }

  /**
   * this function checks if the character collect a coin
   */
  checkCollectCoins() {
    let collectCoinsCounter = 0;
    this.level.collectableCoins.forEach((coin) => {
      collectCoinsCounter += 1;
      if (this.character.isColliding(coin)) {
        this.character.coins += 1;
        this.level.collectableCoins.splice(collectCoinsCounter - 1, 1);
        this.coinStatusBar.setCoinStatus(this.character.coins);
      }
    });
  }

  /**
   * this function checks if the character collect a bottle
   */
  checkCollectBottle() {
    let collectBottelsCounter = 0;
    this.level.collectableBottles.forEach((bottle) => {
      collectBottelsCounter += 1;
      if (this.character.isColliding(bottle)) {
        this.character.collectBottel();
        this.level.collectableBottles.splice(collectBottelsCounter - 1, 1);
        this.bottleStatusBar.setBottleStatus(this.character.bottles);
      }
    });
  }

  /**
   * Checks if any Enemy hit by a throwing bottle and reduce enemies Energy with 10
   */
  checkHitEnemyWithBottle() {
    this.level.enemies.forEach((enemy) => {
      this.bottles.forEach((bottle) => {
        if (bottle.isColliding(enemy)) {
          enemy.hit();
          console.log("The Enemy" + enemy + "is Hit by a Bottle!");
        }
      });
    });
  }

  /**
   * this functin checks it the character jumps on a enemy
   */
  checkJumpOnEnemy() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isCollidingFromTop(enemy)) {
        enemy.hit();
        this.character.jump();
        console.log("Pepe jumped on the enemy!");
      }
    });
  }

  /**
   * Checks if any Enemy has enough energy, when not delete it from Canvas
   */
  checkLiveOfAllEnemies() {
    for (let i = this.level.enemies.length - 1; i >= 0; i--) {
      const enemy = this.level.enemies[i];
      if (enemy.energy <= 0) {
        this.level.enemies.splice(i, 1);
      }
    }
  }

  /**
   * this function draws the objects on the canvas
   */
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.collectableCoins);
    this.addObjectsToMap(this.level.collectableBottles);
    this.addObjectsToMap(this.bottles);

    this.ctx.translate(-this.camera_x, 0);
    // ----- Space for fixed objects -------
    this.addObjectsToMap([this.statusbar]);
    this.addObjectsToMap([this.coinStatusBar]);
    this.addObjectsToMap([this.bottleStatusBar]);

    this.ctx.translate(this.camera_x, 0);
    this.addToMap(this.character);
    this.addObjectsToMap(this.level.enemies);
    this.ctx.translate(-this.camera_x, 0);

    self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }
  
  /**
   * this function add some objects to the map
   * @param {object} objects 
   */
  addObjectsToMap(objects) {
    objects.forEach((object) => {
      this.addToMap(object);
    });
  }

  /**
   * this function draw a object on the map
   * @param {object} mo 
   */
  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    //mo.drawFrame(this.ctx);
    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  /**
   * this functions flips a image
   * @param {object} mo 
   */
  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  /**
   * this functions flips a fliped image back
   * @param {object} mo 
   */
  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }

  /**
   * this function stopps all intervals on the screen
   */
  stopAllIntervals() {
    for (let index = 0; index < 1000; index++) {
      window.clearInterval(index);
    }
  }
}
