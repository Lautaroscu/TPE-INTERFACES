import { getFlagAdquirido } from "../components/adqurido.js";
import { getFlagPrecio } from "../components/precio.js";
export default class Card {
  #name;
  #description;
  #imageUrl;
  #esPago;
  #adquirido;
  #enCarrito;

  constructor(name, description, imageUrl, adquirido, esPago, enCarrito) {
    this.#name = name;
    this.#description = description;
    this.#imageUrl = imageUrl;
    this.setAdquirido(adquirido);
    this.setEsPago(esPago);
    this.#enCarrito = enCarrito;
  }
  getName() {
    return this.#name;
  }
  getDescription() {
    return this.#description;
  }
  getImage() {
    return this.#imageUrl;
  }
  setAdquirido(adqurido) {
    this.#adquirido = adqurido;
  }
  setEsPago(esPago) {
    this.#esPago = esPago;
  }
  setEnCarrito(enCarrito) {
    this.#enCarrito = enCarrito;
  }

  render() {
    let CardContainer = document.createElement("div");
    let ImageContainer = document.createElement("figure");
    let img = document.createElement("img");
    img.src = `${this.#imageUrl}`;
    img.alt = `${this.#name}`;
    img.classList.add("gameImage");
    let infoContainer = document.createElement("div");
    let tituloContainer = document.createElement("p");
    tituloContainer.innerHTML = `${this.#name}`;
    let botonContainer = document.createElement("div");
    let botonJugar = document.createElement("img");
    botonContainer.appendChild(botonJugar);
    botonContainer.classList.add("botonContainer");

    CardContainer.classList.add("card");
    ImageContainer.classList.add("imgContainer");
    infoContainer.classList.add("infoContainer");
    ImageContainer.appendChild(img);
    infoContainer.appendChild(tituloContainer);
    infoContainer.appendChild(botonContainer);

    CardContainer.appendChild(ImageContainer);
    CardContainer.appendChild(infoContainer);

    botonJugar.src = "/src/assets/svgs/jugar.svg";
    if (this.#esPago && !this.#adquirido) {
      botonContainer.classList.add("disable");
    }

    return CardContainer;
  }
}
