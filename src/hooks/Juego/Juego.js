import Tablero from "./Tablero.js";
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let tablero = new Tablero(6, 7, null, null, ctx, canvas, 600, 400, 40, 0);
