class MovableObject {
    x = 120;
    y = 340;
    width = 100;
    height = 90;
    img;
    imageCache = {};

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr){
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
}