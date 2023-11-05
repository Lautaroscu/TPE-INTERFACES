"use strict";
import Jugador from "./Jugador.js";
import Tablero from "./Tablero.js";

class Juego {
  #canvas = document.getElementById("canvas");
  #ctx = canvas.getContext("2d");
  #jugador1;
  #jugador2;
  #jugadorActual;
  #tiempoXJugador;
  #filas;
  #columnas;
  #tablero;

  constructor(j1, j2, tJ, f, c) {
    this.#jugador1 = j1;
    this.#jugador2 = j2;
    this.#tiempoXJugador = tJ;
    this.#filas = f;
    this.#columnas = c;
    this.#tablero = new Tablero(
      this.#filas,
      this.#columnas,
      this.#ctx,
      this.#canvas,
      700,
      400,
      250,
      0
    );
    this.jugadores = [this.#jugador1, this.#jugador2];

    this.verificarGanador();
    this.#jugadorActual = this.turnoInit();
  }
  verificarGanador() {
    document.getElementById("hovers").childNodes.forEach((e) => {
      e.addEventListener("click", () => {
        let columna = Number(e.id);
        let fila = this.#tablero.addFicha(
          columna,
          this.#jugadorActual.getFicha()
        );
        console.log({ actual: this.#jugadorActual });

        this.setTurno(this.getProximoJugador());
        if (
          this.#tablero.verificarDiagonal1(columna, fila).length == 4 ||
          this.#tablero.verificarDiagonal2(columna, fila).length == 4 ||
          this.#tablero.verificarFila(columna, fila).length == 4 ||
          this.#tablero.verificarColumna(columna, fila).length == 4
        ) {
          alert("gano");
        }
        console.log({
          d1: this.#tablero.verificarDiagonal1(columna, fila),
          d2: this.#tablero.verificarDiagonal2(columna, fila),
          vF: this.#tablero.verificarFila(columna, fila),
          vC: this.#tablero.verificarColumna(columna, fila),
        });
      });
    });
  }
  turnoInit() {
    return this.jugadores[Math.floor(Math.random() * this.jugadores.length)];
  }
  setTurno(jugador) {
    this.#jugadorActual = jugador;
  }
  getProximoJugador() {
    let [jugador] = this.jugadores.filter((j) => {
      return j.getNombre() != this.#jugadorActual.getNombre();
    });
    return jugador;
  }
}
let img1 = new Image();
let img2 = new Image();
img1.src = "./src/assets/images/user.avif";
img2.src = "./src/assets/images/spidermean.jpg";
let jjuego = new Juego(
  new Jugador(img1, "Pepe"),
  new Jugador(img2, "Tobito"),

  20,
  6,
  7
);
