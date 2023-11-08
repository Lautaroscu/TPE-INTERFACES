"use strict";

import Tablero from "./Tablero.js";
import Ficha from "./Ficha.js";
export default class Juego {
  #canvas = document.getElementById("canvas");
  #ctx = canvas.getContext("2d");
  #jugador1;
  #jugador2;
  #jugadorActual;

  #tablero;
  #canvasW = this.#canvas.width;
  #canvasH = this.#canvas.height;

  constructor(j1, j2, N) {
    this.#jugador1 = j1;
    this.#jugador2 = j2;

    this.#tablero = new Tablero(this.#ctx, this.#canvas, 700, 400, 250, 0, N);

    this.jugadores = [this.#jugador1, this.#jugador2];
    this.lastClickedFigure = null;
    this.verificarGanador();
    this.#jugadorActual = this.turnoInit();
    // this.fichasJ1 = this.apilarFichas(this.#jugador1.getFicha(), 0);
    // this.fichasJ2 = this.apilarFichas(this.#jugador2.getFicha(), 950);
    // this.clickCanva();
  }

  verificarGanador() {
    document.getElementById("hovers").childNodes.forEach((e) => {
      e.addEventListener("click", () => {
        let columna = Number(e.id);
        let fila = this.#tablero.addFicha(
          columna,
          this.#jugadorActual.getFicha()
        );
        if (this.hayUnGanador(columna, fila)) this.showGanador();

        this.setTurno(this.getProximoJugador());
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
  hayUnGanador(columna, fila) {
    let max = this.#tablero.getN();

    return (
      this.#tablero.verificarDiagonal1(columna, fila).length == max ||
      this.#tablero.verificarDiagonal2(columna, fila).length == max ||
      this.#tablero.verificarFila(columna, fila).length == max ||
      this.#tablero.verificarColumna(columna, fila).length == max
    );
  }
  showGanador() {
    let sectionWinner = document.querySelector(".showModal");
    let winner = document.getElementById("ganador");
    winner.innerHTML = this.#jugadorActual.getNombre();
    sectionWinner.classList.toggle("s");
  }
  // apilarFichas(cara, x1) {
  //   let y = 400 - Ficha.getSize();
  //   let fichas = [];
  //   let x = x1 + 50;
  //   let size = this.#tablero.getSize();
  //   for (let i = 0; i < size / 2; i++) {
  //     let ficha = new Ficha(cara, x, y, this.#ctx);
  //     fichas.push(ficha);

  //     console.log(ficha.getId());
  //     ficha.draw();
  //     y -= Ficha.getSize();
  //     if (y <= 30) {
  //       x += Ficha.getSize() * 2.5;
  //       y = 400 - Ficha.getSize();
  //     }
  //   }
  //   return fichas;
  // }

  // clickCanva() {
  //   let ctx = this.#ctx;
  //   let canvas = this.#canvas;
  //   let fichasj1 = this.fichasJ1;
  //   let fichasj2 = this.fichasJ2;

  //   let isMouseDown = false;

  //   let lastClickedFigure = null;
  //   canvas.addEventListener(
  //     "mousedown",
  //     (e) => {
  //       isMouseDown = true;
  //       let pos = obtenerPosCanvas(e);

  //       let clickFig = findClickedFigureJ1(pos.x, pos.y);
  //       if (clickFig != null) {
  //         lastClickedFigure = clickFig;
  //         console.log(lastClickedFigure);
  //       }
  //     },
  //     false
  //   );
  //   canvas.addEventListener(
  //     "mouseup",
  //     (e) => {
  //       isMouseDown = false;
  //     },
  //     false
  //   );
  //   canvas.addEventListener(
  //     "mousemove",
  //     (e) => {
  //       // console.log(lastClickedFigure);
  //       let pos = obtenerPosCanvas(e);
  //       if (isMouseDown && lastClickedFigure != null) {
  //         lastClickedFigure.setPosition(pos.x, pos.y);
  //         draw();
  //         this.#tablero.draw();
  //       }
  //     },
  //     false
  //   );
  //   function obtenerPosCanvas(e) {
  //     let rect = canvas.getBoundingClientRect();
  //     return {
  //       x: e.clientX - rect.left,
  //       y: e.clientY - rect.top,
  //     };
  //   }
  //   function draw() {
  //     clearCanvas();
  //     for (let i = 0; i < fichasj1.length; i++) {
  //       fichasj1[i].draw();
  //     }
  //     for (let i = 0; i < fichasj1.length; i++) {
  //       fichasj2[i].draw();
  //     }
  //   }

  //   function findClickedFigureJ1(x, y) {
  //     for (let i = 0; i < fichasj1.length; i++) {
  //       const element = fichasj1[i];

  //       if (element.isPointInside(x, y)) {
  //         console.log("iinside");
  //         return element;
  //       }
  //     }
  //     return null;
  //   }
  //   function clearCanvas() {
  //     ctx.clearRect(0, 0, canvas.width, canvas.height);
  //   }
  // }

  timer() {
    let timer;
    let timeLeft = 500;

    function updateDisplay() {
      const display = document.getElementById("timer");
      display.innerText = timeLeft;
    }

    function startCountdown() {
      if (!timer) {
        timer = setInterval(function () {
          timeLeft--;
          updateDisplay();

          if (timeLeft === 0) {
            clearInterval(timer);
            timer = null;
            alert("Tiempo agotado");
          }
        }, 1000);
      }
    }
    function reset() {
      clearInterval(timer);
      timer = undefined;
      timeLeft = 500;
      console.log(timeLeft);
      updateDisplay();
      startCountdown();
    }
    return { startCountdown, reset };
  }
}
