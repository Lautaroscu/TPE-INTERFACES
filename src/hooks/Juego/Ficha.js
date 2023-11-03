export default class Ficha {
  #cara;
  #posX;
  #posY;
  static #size = 30;
  #contex;
  static #nextId = 0;
  #id;

  constructor(cara, posX, posY, context) {
    this.#cara = cara;
    this.#posX = posX;
    this.#posY = posY;
    this.#contex = context;
    this.draw();
    this.#id = Ficha.#nextId;
    ++Ficha.#nextId;
  }
  draw() {
    let ctx = this.#contex;
    ctx.beginPath();
    ctx.arc(this.#posX, this.#posY, Ficha.#size, 0, Math.PI * 2);
    ctx.save();
    if (this.#cara != null) {
      ctx.clip();
      ctx.drawImage(
        this.#cara,
        this.#posX - Ficha.#size,
        this.#posY - Ficha.#size,
        Ficha.#size * 2,
        Ficha.#size * 2
      );
      ctx.restore();
    } else {
      ctx.fillStyle = "white";
      ctx.fill();
    }

    ctx.closePath();
  }
  static setSize(size) {
    Ficha.#size = size;
  }
  setCara(cara) {
    this.#cara = cara;
  }
  getX() {
    return this.#posX;
  }
  getY() {
    return this.#posY;
  }
  static getSize() {
    return Ficha.#size;
  }
  getCara() {
    return this.#cara;
  }
  soyIgual(otro) {
    if (otro.getCara() != null) {
      return this.getCara().src == otro.getCara().src;
    }

    return false;
  }
  getId() {
    return this.#id;
  }
}
