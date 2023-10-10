import Router from "./router.js";
import { showCarruseles, showDestacados } from "./src/components/Carruseles.js";

const router = new Router();
document.querySelector("#goHome").addEventListener("click", Home);

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
  document.querySelector(".botonContainer").addEventListener("click", () => {
    document.getElementById("app").innerHTML = `
     
     
     
     <nav class="navbar">Home > Categoria > Puzzles > <span>4 en linea </span></nav>
<section class="paginaJuego">
  <div class="juego">
    <div class="nombresJugadores">
      <div class="player">
        <h3>CAPITAN AMERICA</h3>
        <img
          src="../../assets/images/capitanAmetica.jpg"
          alt="imagen cap america"
        />
        <h2>2</h2>
      </div>
      <h2>-</h2>
      <div class="player">
        <h2>0</h2>
        <img src="../../assets/images/spidermean.jpg" alt="imagen spiderman" />
        <h3>SPIDERMAN</h3>
      </div>
    </div>

    <img src="../../assets/images/juego.jpg" alt="Juego 4 en linea tabla" />

    <section>
      <a id="share"
        ><img
          src="../../assets/svgs/share_FILL1_wght400_GRAD0_opsz24.svg"
          alt="Compartir"
      /></a>
      <div class="compartirBody">
        <div class="compCerrar">
          <h4>Compartir</h4>
          <img src="" alt="cerrar Ventana" />
        </div>
        <div class="Redes">
          <img src="" alt="Facebook" />
          <img src="" alt="Instagram" />
          <img src="" alt="Gmail" />
          <img src="" alt="WPP" />
          <img src="" alt="Twitter" />
        </div>

        <div class="input">
          <p>https://twoandahalf.games/atovprrob2?id=3moo387m8</p>
          <div>Copiar</div>
        </div>
      </div>
    </section>
  </div>
  <div class="reglasJuego">
    <h1>REGLAS:</h1>

    <p>
      El 4 en linea se juega de a dos jugadores sobre un tablero de siete
      columnas y seis filas. El objetivo es alinear cuatro fichas de un mismo
      jugador, horizontalmente, verticalmente o en diagonal. Las fichas tienen
      que ponerse en la linea inferior o sobre otra ficha.
    </p>
  </div>

  <div class="infoJuego">
    <h1>Estrategias para ganar en el Juego</h1>

    <h2>¿Como comenzar una partida de 4 en linea?</h2>
    <p>
      Para comenzar bien la partida de Conecta 4 es importante colocar el máximo
      de fichas en la columna del medio, esto le dará más posibilidades de hacer
      una línea en las jugadas siguientes, y así mismo le dará menos
      oportunidades a su oponente de hacer una línea. Enseguida planee por
      adelantado una estrategia en la que haga caer en la trampa a su oponente
      obligándolo a hacer una jugada que le permita a usted ganar la partida y
      así subir en la clasificación
    </p>
    <div class="linkVideo">
      <span>https://youtu.be/pht2Bf1WkOA</span>

      <img src="../../assets/images/Video-cuatroLinea.jpg" alt="" />
    </div>

    <div class="coments">
      <img
        src="../../assets/svgs/forum_FILL1_wght400_GRAD0_opsz24.svg"
        alt="Imagen de la caja de  comentarios"
      />
      <h2>COMENTARIOS</h2>
    </div>

    <div class="publi-coments">
      <div class="cajaComentarios">
        <div class="comentario">
          <div class="parteArribaComent">
            <div class="logoNombre">
              <img src="../../assets/images/logouser.png" alt="LogoUsuario" />
              <p class="nombre">Miguelito</p>
              <div class="notificacion">2</div>
            </div>
            <div>
              <img
                src="../../assets/svgs/thumb_up_FILL1_wght400_GRAD0_opsz24.svg"
                alt="like"
              />
              <img
                src="../../assets/svgs/thumb_down_FILL1_wght400_GRAD0_opsz24.svg"
                alt="dislike"
              />
            </div>
          </div>
          <div class="alinear">
            <div class="parteAbajoComent">
              <p>¿Que pensas sobre este juego?...</p>
            </div>
          </div>
        </div>

        <div class="comentarioPublicado">
          <div class="parteArribaComent">
            <div class="logoNombre">
              <img src="../../assets/images/user24.png" alt="LogoUsuario" />
              <p class="nombre">Miguelito</p>
              <div class="notificacion">2</div>
            </div>
            <div>
              <img
                src="../../assets/svgs/thumb_up_FILL1_wght400_GRAD0_opsz24.svg"
                alt="like"
              />
              <img
                src="../../assets/svgs/thumb_down_FILL1_wght400_GRAD0_opsz24.svg"
                alt="dislike"
              />
            </div>
          </div>
          <div class="alinear">
            <p>MI COMENTARIOO</p>
            <img
              src="../../assets/images/logouser.png"
              alt="Lapiz para editar comen"
            />
          </div>
        </div>

        <div class="comentarioPublicado">
          <div class="parteArribaComent">
            <div class="logoNombre">
              <img src="../../assets/images/user24.png" alt="LogoUsuario" />
              <p class="nombre">Miguelito</p>
              <div class="notificacion">2</div>
            </div>
            <div>
              <img
                src="../../assets/svgs/thumb_up_FILL1_wght400_GRAD0_opsz24.svg"
                alt="like"
              />
              <img
                src="../../assets/svgs/thumb_down_FILL1_wght400_GRAD0_opsz24.svg"
                alt="dislike"
              />
            </div>
          </div>
          <div class="alinear">
            <p>Comentario Publicado :)</p>
          </div>
        </div>
      </div>

      <aside class="publicidad">
        <img src="../../assets/images/fondoPubli.png" alt="fondo publicidad" />
      </aside>
    </div>
  </div>
</section>

     
     
     `;
  });
}

App();
