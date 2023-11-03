"use strict";
import Tablero from "./Tablero.js";

class Juego {
  #canvas = document.getElementById("canvas");
  #ctx = canvas.getContext("2d");
  #jugador1;
  #jugador2;
  #ficha1;
  #ficha2;
  #tiempoXJugador;
  #filas;
  #columnas;
  #tablero;

  constructor(j1, j2, f1, f2, tJ, f, c) {
    this.#jugador1 = j1;
    this.#jugador2 = j2;
    this.#ficha1 = f1;
    this.#ficha2 = f2;
    this.#filas = f;
    this.#columnas = c;
    this.#tablero = new Tablero(
      this.#filas,
      this.#columnas,
      this.#ficha1,
      this.#ficha2,
      this.#ctx,
      this.#canvas,
      700,
      400,
      250,
      0
    );
    this.verificarGanador();
  }
  verificarGanador() {
    let ganador = false;
    document.getElementById("hovers").childNodes.forEach((e) => {
      e.addEventListener("click", () => {
        let columna = Number(e.id);
        let fila = this.#tablero.addFicha(columna);
        this.#tablero.showTablero();
        if (
          this.#tablero.verificarDiagonal1(columna, fila).length == 4 ||
          this.#tablero.verificarDiagonal2(columna, fila).length == 4
        ) {
          alert("gano");
        }
      });
    });
  }
}
let jjuego = new Juego(null, null, null, null, 20, 6, 7);
