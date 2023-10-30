import {
  juegosGratis,
  juegosPagos,
  juegosGratis2,
  juegosDestacados,
} from "../services/getData.js";
import Card from "../hooks/Card.js";
import Carrusel from "../hooks/Carrusel.js";
import CardDestacado from "../hooks/CardDestacado.js";

export function showCarruseles() {
  let CarruselGratis = new Carrusel(document.getElementById("carruselGratis"));
  let CarruselPago = new Carrusel(document.getElementById("carruselPago"));
  let CarruselGratis2 = new Carrusel(
    document.getElementById("carruselGratis2")
  );
  let id = 0;
  juegosPagos.map((game) => {
    const { name, description, image } = game;
    game.id = id;
    const card = new Card(name, description, image, false, true, false, id);
    id++;
    CarruselPago.addCard(card);
  });

  CarruselPago.getCard(1).setAdquirido(true);
  CarruselPago.getCard(2).setAdquirido(true);

  CarruselPago.getCard(4).setAdquirido(true);
  CarruselPago.getCard(12).setAdquirido(true);

  CarruselPago.showCarrusel();
  const carritos = document.querySelectorAll(".carritoContainer img");

  carritos.forEach((carrito) => {
    carrito.addEventListener("click", () => {
      let cardId = carrito.parentElement;

      let add = cardId.getElementsByClassName("add")[0];
      let remove = cardId.getElementsByClassName("remove")[0];

      if (add.style.display != "none") {
        add.style.display = "none";
        remove.style.display = "block";
      } else {
        remove.style.display = "none";
        add.style.display = "block";
      }
    });
  });

  juegosGratis.forEach((game) => {
    const { name, description, image, image2 } = game;
    const card = new Card(
      name,
      description,
      image,
      false,
      false,
      false,
      0,
      image2
    );
    CarruselGratis.addCard(card);
  });

  CarruselGratis.showCarrusel();

  juegosGratis2.forEach((game) => {
    const { name, description, image } = game;
    const card = new Card(name, description, image, false, false, false);
    CarruselGratis2.addCard(card);
  });
  CarruselGratis2.showCarrusel();

  // Constantes
  const CARD_WIDTH = document.querySelector(".card").offsetWidth; // Ancho de cada card
  const CARD_GAP = 10; // Espacio entre cards

  // Variables
  let carruseles = document.querySelectorAll(".carrusel"); // Elemento del carrusel
  let arrows = document.querySelectorAll(".carruselContainer i"); // Botones
  let numCards = carruseles[0].children.length; // Número de cards en el carrusel
  let carruselWidth = numCards * (CARD_WIDTH + CARD_GAP);
  let maxScroll = carruselWidth - carruseles[0].offsetWidth; // Desplazamiento máximo del carrusel
  let currentScroll = [0, 0, 0]; // Desplazamiento actual de cada carrusel

  // Función para mover el carrusel a una posición
  function moveCarrusel(carrusel, button) {
    // Obtener el índice del carrusel (0 o 1)
    let index = Array.prototype.indexOf.call(carruseles, carrusel);
    // Obtener la dirección del botón (left o right)
    let direction = button.id == "left" ? -1 : 1;
    // Calcular la posición a la que se va a mover el carrusel
    let position = currentScroll[index] + direction * (CARD_WIDTH + CARD_GAP);
    // Ajustar la posición al límite si se pasa
    if (position < 0) {
      position = 0;
    } else if (position > maxScroll) {
      position = maxScroll;
    }
    // Actualizar el desplazamiento actual del carrusel
    currentScroll[index] = position;
    // Mover el carrusel usando scrollTo
    carrusel.scrollTo({
      top: 0,
      left: position,
    });
  }

  // Recorrer todos los botones
  for (let i = 0; i < arrows.length; i++) {
    // Obtener el botón actual
    let button = arrows[i];
    // Obtener el carrusel al que pertenece el botón
    let carrusel = button.parentElement.querySelector(".carrusel");
    // Asignar un evento de clic al botón
    button.addEventListener("click", () => {
      // Llamar a la función para mover el carrusel pasando el carrusel y el botón como argumentos
      moveCarrusel(carrusel, button);
    });
  }
}

export function showDestacados() {
  let destacado = document.querySelector(".destacados");

  juegosDestacados.forEach((game) => {
    const { name, description, image } = game;

    const cardDestacado = new CardDestacado(
      name,
      description,
      image,
      false,
      false,
      false
    );
    destacado.appendChild(cardDestacado.render());
  });
  const { previousElementSibling, nextElementSibling, children } = destacado;

  const widthDestacado = children[0].offsetWidth;
  console.log(widthDestacado);
  previousElementSibling.addEventListener("click", () => {
    destacado.scrollLeft += -1 * widthDestacado;
  });
  nextElementSibling.addEventListener("click", () => {
    destacado.scrollLeft += widthDestacado;
  });
  destacado.scrollIntoView({
    behavior: "smooth",
  });
}
// Evento de clic en el botón derecho
