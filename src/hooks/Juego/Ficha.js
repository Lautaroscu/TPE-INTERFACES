export default class Ficha {
  #cara;
  #posX;
  #posY;
  static #size = 20;
  #contex;

  constructor(cara, posX, posY, context) {
    this.#cara = cara;
    this.#posX = posX;
    this.#posY = posY;
    this.#contex = context;
    this.draw();
  }
  draw() {
    let ctx = this.#contex;
    ctx.beginPath();
    ctx.arc(this.#posX, this.#posY, Ficha.#size, Ficha.#size, Math.PI * 2);
    ctx.fillStyle = ctx.createPattern(this.#cara, "repeat");
    ctx.fill();
    ctx.closePath();
  }
  static setSize(size) {
    Ficha.#size = size;
  }
  tirar() {
    return this;
  }
  getCara() {
    return this.#cara;
  }
}
