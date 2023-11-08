export default class Ficha {
  #cara;
  #posX;
  #posY;
  static #size = 30;
  #contex;
  static #nextId = 0;
  #id;
  #disponible;

  constructor(cara, posX, posY, context) {
    this.#cara = cara;
    this.#posX = posX;
    this.#posY = posY;
    this.#contex = context;
    this.draw();
    this.resaltado = false;
    this.#id = Ficha.#nextId;
    ++Ficha.#nextId;
    this.#disponible = true;
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
  getDisponible() {
    return this.#disponible;
  }
  setDisponible(d) {
    this.#disponible = d;
  }
  getCara() {
    return this.#cara;
  }
  setCara(img) {}
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
      return (
        this.getCara().src == otro.getCara().src && otro.getId() != this.getId()
      );
    }

    return false;
  }
  getId() {
    return this.#id;
  }
  setDisponible(s) {
    this.#disponible = s;
  }
  setPosition(x, y) {
    this.#posX = x;
    this.#posY = y;
  }

  getPosition() {
    return this.getX(), this.getY();
  }

  isPointInside(x, y) {
    let _x = this.#posX - x;
    let _y = this.#posY - y;

    return Math.sqrt(_x * _x + _y * _y) < Ficha.#size;
  }
}
