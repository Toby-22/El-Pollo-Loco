class ThrowableObject extends MovableObject {

    constructor(x, y){
        super().loadImage('img/7_statusbars/3_icons/icon_salsa_bottle.png');
        this.x = x;
        this.y = y;
        this.throw();

    }

    throw(){
        this.speedY = 30;
        this.applyGravity();
        console.log(this.x, this.y)
        setInterval(() => {
            this.x += 10;
        }, 25);

    }
}