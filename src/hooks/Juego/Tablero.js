import Ficha from "./Ficha.js";

export default class Tablero {
  #columnas;
  #filas;
  #img1;
  #img2;
  #context;
  #width;
  #height;
  #canvas;
  #x;
  #y;

  constructor(
    filas,
    columnas,
    img1,
    img2,
    contex,
    canvas,
    width,
    height,
    x,
    y
  ) {
    this.#filas = filas;
    this.#columnas = columnas;
    this.#img1 = img1;
    this.#img2 = img2;
    this.#height = height;
    this.#width = width;
    this.#context = contex;
    this.#canvas = canvas;
    this.tablero = [];
    this.#x = x;
    this.#y = y;
    this.draw();
  }

  draw() {
    let ctx = this.#context;
    ctx.beginPath();

    ctx.rect(this.#x, this.#y, this.#width, this.#height);

    ctx.closePath();
    ctx.fillStyle = "red";
    ctx.fill();
    this.cargarFichas();
  }
  cargarFichas() {
    let distanciaEntreColumnas = this.#width / this.#columnas;
    let distanciaEntreFilas = this.#height / this.#filas;
    let nuevoHeight = 0;
    let nuevoWidth = distanciaEntreFilas - 2 + this.#x - 4;
    let cara = new Image();

    cara.src = "./src/assets/images/user.avif";
    cara.addEventListener("load", () => {
      for (let i = 0; i < this.#columnas; i++) {
        let filas = [];
        console.log(cara);
        nuevoHeight = distanciaEntreFilas / 2 + this.#y;
        for (let j = 0; j < this.#filas; j++) {
          let ficha = new Ficha(
            cara,
            Math.floor(Math.random() * this.#width),
            Math.floor(Math.random() * this.#height),
            this.#context
          );
          filas.push(ficha);
          nuevoWidth += distanciaEntreColumnas;
        }
        this.tablero.push(filas);
        this.#width += distanciaEntreColumnas;
      }
      this.showTablero();
    });
  }

  showTablero() {
    for (let i = 0; i < this.tablero.length; i++) {
      this.tablero[i].forEach((f) => {
        f.draw();
      });
    }
  }
}
