import Ficha from "./Ficha.js";

export default class Tablero {
  #columnas;
  #filas;

  #context;
  #width;
  #height;
  #canvas;
  #x;
  #y;

  constructor(
    filas,
    columnas,

    contex,
    canvas,
    width,
    height,
    x,
    y
  ) {
    this.#filas = filas;
    this.#columnas = columnas;
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
  cambiarFicha(c, f, img) {
    this.tablero[c][f].setCara(img);
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
      let img2 = new Image();

      img2.src = "./src/assets/images/spidermean.jpg";
      this.cambiarFicha(columna, fila, ficha);
      return fila;
    }
  }

  verificarDiagonal1(columna, fila) {
    let ficha = this.tablero[columna][fila];

    let Iguales = [];

    Iguales.push(ficha);
    let contador = 1;

    while (
      contador < 4 &&
      columna + contador <= this.#columnas - 1 &&
      fila - contador >= 0
    ) {
      console.log("d1");
      if (ficha.soyIgual(this.tablero[columna + contador][fila - contador])) {
        Iguales.push(this.tablero[columna + contador][fila - contador]);
        contador = Iguales.length;
      } else break;
    }
    if (contador < 4) {
      let contadorAUX = 1;
      while (
        contador < 4 &&
        columna - contadorAUX >= 0 &&
        fila + contadorAUX <= this.#filas - 1
      ) {
        if (
          ficha.soyIgual(
            this.tablero[columna - contadorAUX][fila + contadorAUX]
          )
        ) {
          Iguales.push(this.tablero[columna - contadorAUX][fila + contadorAUX]);
          contador = Iguales.length;
          contadorAUX++;
        } else break;
      }
    }

    return Iguales;
  }

  verificarDiagonal2(columna, fila) {
    let ficha = this.tablero[columna][fila];

    let Iguales = [];
    Iguales.push(ficha);
    let contador = 1;

    while (columna - contador >= 0 && fila - contador >= 0 && contador < 4) {
      if (ficha.soyIgual(this.tablero[columna - contador][fila - contador])) {
        Iguales.push(this.tablero[columna - contador][fila - contador]);
      } else break;
    }
    if (contador < 4) {
      let contadorAUX = 1;
      while (
        columna + contadorAUX <= this.#columnas - 1 &&
        fila + contadorAUX <= this.#filas - 1 &&
        contador < 4
      ) {
        console.log("d2");
        if (
          ficha.soyIgual(
            this.tablero[columna + contadorAUX][fila + contadorAUX]
          )
        ) {
          Iguales.push(this.tablero[columna + contadorAUX][fila + contadorAUX]);
          contadorAUX++;
          contador = Iguales.length;
          console.log({ c: contador, l: Iguales.length });
        } else break;
      }
    }

    return Iguales;
  }
  verificarFila(columna, fila) {
    let ficha = this.tablero[columna][fila];
    let contador = 1;
    let Iguales = [];
    Iguales.push(ficha);

    while (columna - contador >= 0 && contador < 4) {
      if (ficha.soyIgual(this.tablero[columna - contador][fila])) {
        console.log("Iguaal IZQ");
        Iguales.push(this.tablero[columna - contador][fila]);
        contador = Iguales.length;
        console.log(Iguales.length);
      } else break;
    }
    if (contador < 4) {
      let contadorAUX = 1;
      while (
        columna + contadorAUX < this.#columnas - 1 &&
        contador < 4 &&
        this.tablero[columna + contadorAUX][fila].getCara() != null
      ) {
        console.log("fil");
        if (ficha.soyIgual(this.tablero[columna + contadorAUX][fila])) {
          console.log("Iguaal Der");
          Iguales.push(this.tablero[columna + contadorAUX][fila]);
          contadorAUX++;
          contador = Iguales.length;
        } else break;
      }
    }
    return Iguales;
  }
  verificarColumna(columna, fila) {
    let ficha = this.tablero[columna][fila];
    let contador = 1;
    let Iguales = [];
    Iguales.push(ficha);
    while (contador < 4 && fila + contador <= this.#filas - 1) {
      console.log("col");
      if (ficha.soyIgual(this.tablero[columna][fila + contador])) {
        Iguales.push(this.tablero[columna][fila + contador]);
        contador = Iguales.length;
      } else break;
    }
    console.log(Iguales);
    return Iguales;
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
