class CollectableObject extends DrawableObject{

    constructor(path, x, y){
        super().loadImage(path);
        this.width = 100;
        this.height = 100;
        this.x = x;
        this.y = y;
    }
}