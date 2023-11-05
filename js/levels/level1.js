let level1;
let bottles = [];
let coins = [];
let enemies = [];

/**
 * initialize a new level object with Enemys, Clouds, Bottles and Coins 
 */
function initLevel1(){
    createBottles(15);
    createCoins(10);
    createEnemies(15);
level1 = new Level(
    enemies,
    [new Cloud()],
    [
        new BackgroundObject("img/5_background/layers/air.png", -719, 0),
        new BackgroundObject("img/5_background/layers/3_third_layer/2.png", -719, 0),
        new BackgroundObject("img/5_background/layers/2_second_layer/2.png", -719, 0),
        new BackgroundObject("img/5_background/layers/1_first_layer/2.png", -719, 0),
        new BackgroundObject("img/5_background/layers/air.png", 0, 0),
        new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 0, 0),
        new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 0, 0),
        new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 0, 0),
        new BackgroundObject("img/5_background/layers/air.png", 719, 0),
        new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 719, 0),
        new BackgroundObject("img/5_background/layers/2_second_layer/2.png", 719, 0),
        new BackgroundObject("img/5_background/layers/1_first_layer/2.png", 719, 0),
        new BackgroundObject("img/5_background/layers/air.png", 719*2, 0),
        new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 719*2, 0),
        new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 719*2, 0),
        new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 719*2, 0),
        new BackgroundObject("img/5_background/layers/air.png", 719*3, 0),
        new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 719*3, 0),
        new BackgroundObject("img/5_background/layers/2_second_layer/2.png", 719*3, 0),
        new BackgroundObject("img/5_background/layers/1_first_layer/2.png", 719*3, 0),
        new BackgroundObject("img/5_background/layers/air.png", 719*4, 0),
        new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 719*4, 0),
        new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 719*4, 0),
        new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 719*4, 0),
        new BackgroundObject("img/5_background/layers/air.png", 719*5, 0),
        new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 719*5, 0),
        new BackgroundObject("img/5_background/layers/2_second_layer/2.png", 719*5, 0),
        new BackgroundObject("img/5_background/layers/1_first_layer/2.png", 719*5, 0),
    ],
    coins,
    bottles
);
}

function createBottles(quantity){
    for (let index = 0; index < quantity; index++) {
        let x = Math.random() * (3200 - 500) + 500;
        let y = Math.random() * (250 - 420) + 250;
        bottles.push(new CollectableObject("img/6_salsa_bottle/salsa_bottle.png", x, y)); 
    }
}

function createCoins(quantity){
    for (let index = 0; index < quantity; index++) {
        let x = Math.random() * (3200 - 500) + 500;
        let y = Math.random() * (250 - 420) + 250;
        coins.push(new CollectableObject("img/8_coin/coin_1.png", x, y)); 
    }
}

function createEnemies(quantity){
    for (let index = 0; index < quantity; index++) {
        enemies.push(new Chicken());        
    }
    enemies.push(new Endboss())
}