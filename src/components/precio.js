export const getFlagPrecio = () => {
  const precioRandom = Math.floor(Math.random() * 100) + 1;
  return `<div class="precio">
  <div></div>
  <div><p>$${precioRandom}.00</p></div>
</div>`;
};
