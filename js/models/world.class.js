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

  run() {
    setInterval(() => {
      this.checkCollisions();
      this.checkThrowObjects();
      this.checkCollectBottle();
      this.checkCollectCoins();
      this.checkHitEnemyWithBottle();
    }, 100);
  }

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

  checkCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        this.character.hit();
        this.statusbar.setPercentage(this.character.energy);
      }
    });
  }

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

  addObjectsToMap(objects) {
    objects.forEach((object) => {
      this.addToMap(object);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    mo.drawFrame(this.ctx);
    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }

  stopAllIntervals(){
    for (let index = 0; index < 1000; index++) {
      window.clearInterval(index);
      
    }
  }
}
