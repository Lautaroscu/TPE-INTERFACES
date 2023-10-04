import Router from "./router.js";
import {
  showCarruselGratis,
  showCarruselPago,
} from "./src/components/Carruseles.js";
document.addEventListener("DOMContentLoaded", function () {
  const router = new Router();
  document.getElementById("logo").addEventListener("click", Home);

  function App() {
    Home();
    Juego();
  }

  async function Home() {
    await router.load();
    showCarruselGratis();
    showCarruselPago();
  }
  function Juego() {
    document
      .getElementById("juego")
      .addEventListener("click", async () => await router.load("juego"));
  }

  App();
});
