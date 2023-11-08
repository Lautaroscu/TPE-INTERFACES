"use strict";

import Juego from "./Juego.js";
import Jugador from "./Jugador.js";
document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("formCustom");
  form.addEventListener("submit", setGame);

  let container = document.getElementById("imgs2");

  const player1 = new Jugador(null, null);
  const player2 = new Jugador(null, null);

  let jugadores = [player1, player2];
  function setGame(e) {
    e.preventDefault();
    const { namePlayerOne, namePlayerTwo, dimension } = Object.fromEntries(
      new FormData(form)
    );

    player1.setNombre(namePlayerOne);
    player2.setNombre(namePlayerTwo);
    document.getElementById("namePlayer1").textContent = namePlayerOne;
    document.getElementById("namePlayer2").textContent = namePlayerTwo;
    document.getElementById("imgPlayer1").appendChild(player1.getFicha());
    document.getElementById("imgPlayer2").appendChild(player2.getFicha());

    let juego = new Juego(player1, player2, Number(dimension));
    juego.timer().startCountdown();

    form.reset();

    document.querySelector(".customGame").style.display = "none";
    document.querySelector(".paginaJuego").style.display = "flex";
  }

  container.addEventListener("click", (e) => {
    console.log(e.layerX);
    let i = 0;
    while (i < jugadores.length && jugadores[i].getFicha() != null) {
      i++;
    }
    jugadores[i].setFicha(e.target);
    document.getElementById("elegirFicha").textContent = "Jugador 2 :";
    e.target.classList.remove("img");
    e.target.classList.add("selected");
  });
});
