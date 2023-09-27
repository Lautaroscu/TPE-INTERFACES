"use strict";

window["index"].addEventListener("click", (event) => pull(event));
window["entrenamientos"].addEventListener("click", (event) => pull(event));
window["habitos"].addEventListener("click", (event) => pull(event));
traer(index.id);
seleccionar_tag(index.id);
function pull(event) {
  let id = event.target.id;
  seleccionar_tag(id);
  document.title = id;
  traer(id);
  window.history.pushState({ id }, `${id}`, `/page/${id}`);
}
function seleccionar_tag(id) {
  document
    .querySelectorAll(".btn_nav")
    .forEach((item) => item.classList.remove("seleccionado"));
  document
    .querySelectorAll("#" + id)
    .forEach((item) => item.classList.add("seleccionado"));
}
async function traer(id) {
  try {
    let promesa = await fetch(`${window.location.origin}/${id}.html`);
    if (promesa.ok) {
      let contenido = await promesa.text();
      document.querySelector("#article").innerHTML = contenido;
    } else {
      document.querySelector("#article").innerHTML = "error en la url";
    }
    if (id == "entrenamientos") {
      partial_captcha();
    }
    if (id == "habitos") {
      tabla();
    }
  } catch (error) {
    console.log(error);
  }
}
window.addEventListener("popstate", (event) => {
  let stateid = event.state.id;
  seleccionar_tag(stateid);
  traer(stateid);
  document.title = stateid;
});
