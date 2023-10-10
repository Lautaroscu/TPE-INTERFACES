import { getFlagAdquirido } from "../components/adqurido.js";
import { getFlagPrecio } from "../components/precio.js";
import { addCarritoIcon, removeCarritoIcon } from "../components/carritos.js";
export default class Card {
  #name;
  #description;
  #imageUrl;
  #img2;
  #esPago;
  #adquirido;
  #enCarrito;
  #id;
  #carritoAdd;
  #carritoRemove;

  constructor(
    name,
    description,
    imageUrl,
    adquirido,
    esPago,
    enCarrito,
    id,
    img2
  ) {
    this.#name = name;
    this.#description = description;
    this.#imageUrl = imageUrl;
    this.setAdquirido(adquirido);
    this.setEsPago(esPago);
    this.#enCarrito = enCarrito;
    this.#id = id;
    this.#img2 = img2;
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

  getCarrito() {
    return this.#enCarrito;
  }
  getId() {
    return this.#id;
  }
  setCarritos(add, remove) {}

  render() {
    let sectionCard = document.createElement("section");
    sectionCard.classList.add("sectionCard");

    let CardContainer = document.createElement("div");
    CardContainer.id = this.getId();
    let ImageContainer = document.createElement("figure");
    let img = document.createElement("img");
    let img2 = document.createElement("img");
    img.src = `${this.#imageUrl}`;
    img.alt = `${this.#name}`;
    console.log(this.#img2);
    img2.src = this.#img2;
    img.classList.add("imgCard");
    img2.classList.add("imgCardOculta");
    img.classList.add("gameImage");
    let infoContainer = document.createElement("div");
    let tituloContainer = document.createElement("p");
    tituloContainer.innerHTML = `${this.#name}`;
    let botonContainer = document.createElement("div");
    let botonJugar = document.createElement("img");
    let carritoContainer = document.createElement("div");
    carritoContainer.classList.add("carritoContainer");
    this.#carritoAdd = document.createElement("img");
    this.#carritoRemove = document.createElement("img");
    this.#carritoAdd.src =
      "./src/assets/svgs/add_shopping_cart_FILL1_wght400_GRAD0_opsz24.svg";
    this.#carritoRemove.src =
      "./src/assets/svgs/remove_shopping_cart_FILL0_wght400_GRAD0_opsz24.svg";
    this.#carritoAdd.classList.add("add");
    this.#carritoRemove.classList.add("remove");

    carritoContainer.appendChild(this.#carritoAdd);
    carritoContainer.appendChild(this.#carritoRemove);

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
    CardContainer.appendChild(img2);
    const flag = this.#adquirido ? getFlagAdquirido() : getFlagPrecio();

    botonJugar.src = "./src/assets/svgs/jugar.svg";
    if (this.#esPago) {
      CardContainer.appendChild(carritoContainer);
      if (!this.#adquirido) {
        botonContainer.classList.add("disable");
      } else {
        botonContainer.classList.remove("disable");
      }
      sectionCard.innerHTML += flag;
    }
    sectionCard.appendChild(CardContainer);

    return sectionCard;
  }
}
