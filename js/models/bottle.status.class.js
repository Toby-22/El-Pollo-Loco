class BottleStatus extends DrawableObject {

    IMAGES_BOTTLE_STATUS = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png',
      ];
    
      percentage = 0;
      maxBottles;
    
      constructor(character) {
        super();
        this.loadImages(this.IMAGES_BOTTLE_STATUS);
        this.x = 20;
        this.y = 80;
        this.width = 150;
        this.height = 50;
        this.maxBottles = character.maxPortableBottles;
        this.setBottleStatus(0);
      }
    
      setBottleStatus(collectedBottles) {
        this.percentage = (100 * collectedBottles)/ this.maxBottles;
        let path = this.IMAGES_BOTTLE_STATUS[this.resolvedImageIndex()];
        this.img = this.imageCache[path];
      }
      
      resolvedImageIndex() {
        if (this.percentage == 100) {
          return 5;
        } else if (this.percentage > 80) {
          return 4;
        } else if (this.percentage > 60) {
          return 3;
        } else if (this.percentage > 40) {
          return 2;
        } else if (this.percentage > 20) {
          return 1;
        } else{
          return 0;
        }
      }
    
    
    }
    