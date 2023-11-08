export default class Jugador {
  #ficha;
  #nombre;

  constructor(ficha, nombre) {
    this.#ficha = ficha;
    this.#nombre = nombre;
  }
  getFicha() {
    return this.#ficha;
  }
  getNombre() {
    return this.#nombre;
  }
  setFicha(f) {
    this.#ficha = f;
  }
  setNombre(n) {
    this.#nombre = n;
  }
}
