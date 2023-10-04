import { juegosGratis, juegosPagos } from "../services/getData.js";
import Card from "../hooks/Card.js";
import Carrusel from "../hooks/Carrusel.js";
export function showCarruselGratis() {
  let CarruselGratis = new Carrusel(document.getElementById("carruselGratis"));
  juegosGratis.forEach((game) => {
    const { name, description, image } = game;
    const card = new Card(name, description, image, false, false, false);
    CarruselGratis.addCard(card);
  });
  CarruselGratis.showCarrusel();
}

export function showCarruselPago() {
  let CarruselPago = new Carrusel(document.getElementById("carruselPago"));
  juegosPagos.forEach((game) => {
    const { name, description, image } = game;
    const card = new Card(name, description, image, false, true, false);
    CarruselPago.addCard(card);
  });
  CarruselPago.showCarrusel();
}
