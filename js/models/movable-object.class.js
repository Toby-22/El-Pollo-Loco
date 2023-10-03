class MovableObject {
    x = 120;
    y = 340;
    width = 100;
    height = 90;
    img;

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }
}