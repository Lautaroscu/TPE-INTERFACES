import { showCarruseles, showDestacados } from "./src/components/Carruseles.js";

document.querySelector("#home").addEventListener("click", () => {
  window.location.href = "./home.html";
});

document.getElementById("cerrarSesion").addEventListener("click", () => {
  window.location.href = "./src/pages/login.html";
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
    ? "./src/assets/svgs/close_FILL1_wght400_GRAD0_opsz24.svg"
    : "./src/assets/images/user.avif";
  document.querySelector(".user-section").classList.toggle("showMenuUser");
  document.querySelector(".home-container").classList.toggle("shadow");
});

function App() {
  Home();
}

async function Home() {
  showCarruseles();
  showDestacados();
  document
    .querySelector(".botonContainer")
    .addEventListener("click", async () => {
      window.location.href = "./juego.html";
    });
}
document.querySelector(".home").style.display = "none";
CSS.registerProperty({
  name: "--p",
  syntax: "<integer>",
  initialValue: 0,
  inherits: true,
});

function ocultarElementoDespuesDe5Segundos() {
  setTimeout(function () {
    document.querySelector(".loadingDiv").style.display = "none";
    console.log(document.querySelector(".home"));
    document.querySelector(".home").style.display = "block";
  }, 5000);
}

// Llama a la función para activar el temporizador
ocultarElementoDespuesDe5Segundos();
App();
