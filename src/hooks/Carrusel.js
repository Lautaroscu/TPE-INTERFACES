export default class Carrusel {
  #cards = [];
  #container;

  constructor(container) {
    this.#container = container;
  }

  showCarrusel() {
    this.#cards.forEach((card) => {
      this.#container.appendChild(card.render());
    });
  }
  addCard(card) {
    this.#cards.push(card);
  }
  getCarrusel() {
    return this.#container;
  }
  getCard(index) {
    return this.#cards[index];
  }
  getCards() {
    return this.#cards;
  }
}
