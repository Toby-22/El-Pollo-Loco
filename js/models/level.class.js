class Level{
    enemies;
    clouds;
    backgroundObjects;
    collectabelObjects;
    level_end_x = 2200;

    constructor(enemies, clouds, backgroundObjects, collectabelObjects){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects
        this.collectabelObjects = collectabelObjects;
    }
}