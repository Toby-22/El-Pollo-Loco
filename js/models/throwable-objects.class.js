class ThrowableObject extends MovableObject {
    speedY = 30;
    speedX = 20;

    constructor(x, y){
        super().loadImage('img/7_statusbars/3_icons/icon_salsa_bottle.png');
        this.y = y;
        this.x = x;
        this.throw();

    }

    throw(){
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 25);

    }
}