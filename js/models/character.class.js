class Character extends MovableObject{
    width = 170;
    height = 250;
    y = 180;

    constructor(){
        super().loadImage('img/2_character_pepe/2_walk/W-21.png')
    }
    
    moveRight(){
        console.lot('moving right')
    }

    jump(){

    }
}