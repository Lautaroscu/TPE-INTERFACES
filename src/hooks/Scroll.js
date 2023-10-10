export function moveCarrusel(carrusel, button) {
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
