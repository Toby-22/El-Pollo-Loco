let level1;

/**
 * initialize a new level object with Enemys, Clouds, Bottles and Coins 
 */
function initLevel1(){

level1 = new Level(
    [new Chicken(), new Chicken(), new Chicken(), new Endboss()],
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
    [
        new CollectableObject("img/8_coin/coin_1.png", 400, 300),
        new CollectableObject("img/8_coin/coin_1.png", 500, 350),
        new CollectableObject("img/8_coin/coin_1.png", 600, 450),
        new CollectableObject("img/8_coin/coin_1.png", 700, 300),
        new CollectableObject("img/8_coin/coin_1.png", 800, 350),
        new CollectableObject("img/8_coin/coin_1.png", 900, 300),
        new CollectableObject("img/8_coin/coin_1.png", 1000, 400),
        new CollectableObject("img/8_coin/coin_1.png", 1100, 250),
        new CollectableObject("img/8_coin/coin_1.png", 1200, 600),
        new CollectableObject("img/8_coin/coin_1.png", 1300, 320),
        new CollectableObject("img/8_coin/coin_1.png", 1400, 450),
        new CollectableObject("img/8_coin/coin_1.png", 1500, 400),
        new CollectableObject("img/8_coin/coin_1.png", 1600, 300),

    ],
    [
        new CollectableObject("img/6_salsa_bottle/salsa_bottle.png", 600, 300),
        new CollectableObject("img/6_salsa_bottle/salsa_bottle.png", 700, 350),
        new CollectableObject("img/6_salsa_bottle/salsa_bottle.png", 300, 100),
        new CollectableObject("img/6_salsa_bottle/salsa_bottle.png", 800, 300),
        new CollectableObject("img/6_salsa_bottle/salsa_bottle.png", 900, 350),
        new CollectableObject("img/6_salsa_bottle/salsa_bottle.png", 1200, 300),
        new CollectableObject("img/6_salsa_bottle/salsa_bottle.png", 1300, 300),
        new CollectableObject("img/6_salsa_bottle/salsa_bottle.png", 1420, 300),
        new CollectableObject("img/6_salsa_bottle/salsa_bottle.png", 1500, 300),
        new CollectableObject("img/6_salsa_bottle/salsa_bottle.png", 1550, 300),
        new CollectableObject("img/6_salsa_bottle/salsa_bottle.png", 1600, 300),
    ]
);
}
