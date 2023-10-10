import Router from "./router.js";
import { showCarruseles, showDestacados } from "./src/components/Carruseles.js";

const router = new Router();
document.querySelector("#home").addEventListener("click", Home);

document.getElementById("cerrarSesion").addEventListener("click", async () => {
  await router.load("login");
});

document.querySelector(".menu-container").addEventListener("click", () => {
  document.querySelector(".menuIMG").classList.toggle("rotate180");
  document.querySelector(".nav").classList.toggle("show");
});
let open = false;
let userContainerIMG = document.querySelector(".user-container");
let userContainer = document.querySelector(".user-section");
let userIMG = userContainerIMG.childNodes[1];
document.querySelector(`.user-container`).addEventListener("click", (e) => {
  open = !open;
  userIMG.src = open
    ? "/src/assets/svgs/close_FILL1_wght400_GRAD0_opsz24.svg"
    : "/src/assets/images/user.avif";
  document.querySelector(".user-section").classList.toggle("showMenuUser");
  document.querySelector(".home").classList.toggle("shadow");
});

function App() {
  Home();
}

async function Home() {
  await router.load();
  showCarruseles();
  showDestacados();
  document
    .querySelector(".botonContainer")
    .addEventListener("click", async () => {
      router.load("juego");
    });
}

App();
