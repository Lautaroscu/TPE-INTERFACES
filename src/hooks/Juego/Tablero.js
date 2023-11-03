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
    ctx.fill();
    this.cargarFichas();
  }
  cargarFichas() {
    let distanciaEntreColumnas = this.#width / this.#columnas;
    let distanciaEntreFilas = this.#height / this.#filas;
    let fichaWidth = distanciaEntreColumnas - 4;
    let fichaHeight = distanciaEntreFilas - 4;
    let nuevoWidth = this.#x + fichaWidth / 2;
    let hovers = document.getElementById("hovers");
    hovers.style.width = `${this.#width}px`;
    let cara = new Image();
    cara.src = "./src/assets/images/spidermean.jpg";
    for (let i = 0; i < this.#columnas; i++) {
      let hover = document.createElement("div");
      hover.classList.add("row");
      hover.id = i;
      hovers.appendChild(hover);
      hovers.style.display = "flex";
      hovers.style.flexDirection = "row";
      hover.style.width = `${hovers.offsetWidth / this.#columnas}px`;
      hover.style.border = "1px solid black";

      let filas = [];
      let nuevoHeight = this.#y + fichaHeight / 2;

      for (let j = 0; j < this.#filas; j++) {
        let ficha = new Ficha(null, nuevoWidth, nuevoHeight, this.#context);
        filas.push(ficha);
        nuevoHeight += distanciaEntreFilas;
      }

      this.tablero.push(filas);
      nuevoWidth += distanciaEntreColumnas;
    }
    this.showTablero();
  }

  showTablero() {
    for (let i = 0; i < this.#columnas; i++) {
      this.tablero[i].forEach((f) => {
        f.draw();
      });
    }
  }
  estaOcupado(fila, columna) {
    if (this.tablero[columna][fila].getCara() != null) {
      return true;
    }
    return false;
  }
  cambiarFicha(c, f) {
    let newimage = new Image();
    newimage.src = "./src/assets/images/user.avif";
    this.tablero[c][f].setCara(newimage);
    this.showTablero();
  }
  getFichaByPosXY(x, y) {
    for (let i = 0; i < this.#columnas; i++) {
      for (let j = 0; j < this.#filas; j++) {
        if (this.tablero[i][j].getX() == x && this.tablero[i][j] == y) {
        }
      }
    }
  }

  buscarFilaDisponible(columna) {
    let fila = this.#filas - 1;
    while (fila > 0 && this.estaOcupado(fila, columna)) {
      fila--;
    }
    if (fila >= 0) {
      return fila;
    } else return null;
  }

  addFicha(columna, ficha) {
    const fila = this.buscarFilaDisponible(columna);
    if (fila == null) throw Error("No hay espacio en el tablero");
    else {
      this.cambiarFicha(columna, fila);
      return fila;
    }
  }

  verificarDiagonal1(columna, fila) {
    console.log({ c: columna, f: fila });

    let contadorAux = 1;
    let iguales = [];
    let ficha = this.tablero[columna][fila];
    let diagonalArriba =
      this.tablero[columna + contadorAux][fila - contadorAux];

    while (
      ficha.soyIgual(diagonalArriba) &&
      contadorAux < 4 &&
      fila > 0 &&
      columna < this.#columnas - 1
    ) {
      contadorAux++;
    }
    if (columna > 0 && fila < this.#filas - 1) {
      let diagonalAbajo =
        this.tablero[columna - contadorAux][fila + contadorAux];
      while (ficha.soyIgual(diagonalAbajo) && contadorAux < 4) {
        contadorAux++;
      }
    }

    console.log(contadorAux);
    return contadorAux;
  }

  verificarDiagonal2(columna, fila) {
    let contador = 1;
    let iguales = [];
    let ficha = this.tablero[columna][fila];
    let diagonalArriba = this.tablero[columna - contador][fila - contador];

    while (
      ficha.soyIgual(diagonalArriba) &&
      contador < 4 &&
      fila > 0 &&
      columna > 0
    ) {
      contador++;
    }
    if (
      columna + contador < this.#columnas - 1 &&
      fila + contador < this.#filas - 1
    ) {
      let diagonalAbajo = this.tablero[columna + contador][fila + contador];
      while (
        ficha.soyIgual(diagonalAbajo) &&
        contador < 4 &&
        fila < this.#filas - 1 &&
        columna > 0
      ) {
        contador++;
      }
    }
  }
  getPosFichaById(id) {
    for (let i = 0; i < this.#columnas; i++) {
      for (let j = 0; j < this.#filas; j++) {
        if (this.tablero[i][j].getId() == id) {
          return { columna: i, fila: j };
        }
      }
    }
    return -1;
  }
  isEmpty() {
    for (let i = 0; i < this.#columnas; i++) {
      for (let j = 0; j < this.#filas; j++) {
        if (this.tablero[i][j].getCara() != null) {
          return false;
        }
      }
    }
    return true;
  }
}
