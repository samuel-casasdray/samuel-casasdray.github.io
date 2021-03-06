class Entity {

    constructor(x, y, nom) {
        this.x = x;
        this.y = y;
        this.src = 'img/'+nom+'.png';
        this.entity = document.createElement("img");
        this.entity.src = this.src;
    }

    setPlateforme(plateforme) {
        this.plateforme = plateforme;
    }

    update() {
        this.entity.style.left = (this.x * 32) + "px";
        this.entity.style.top = (this.y * 32) + "px";
    }

    show() {
        return this.entity;
    }

    moveTo(x, y) {
        this.x = x;
        this.y = y;
    }

}
