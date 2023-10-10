import Card from "./Card.js";

export default class CardDestacado extends Card {
  constructor(name, description, imageUrl, adquirido, esPago, enCarrito) {
    super(name, description, imageUrl, adquirido, esPago, enCarrito);
  }
  render() {
    let card = super.render();
    card.childNodes[0].classList.remove("card");
    card.childNodes[0].classList.add("cardDestacado");
    card.childNodes[0].childNodes[2].style.display = "none";
    return card;
  }
}
