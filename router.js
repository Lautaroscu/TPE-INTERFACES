export class Router {
  constructor() {
    this.initRouter();
  }

  async load(page = "home") {
    try {
      const promise = await fetch(
        `${window.location.origin}/src/pages/${page}.html`
      );
      if (promise.ok) {
        const $CONTAINER = document.querySelector("#app");
        $CONTAINER.innerHTML = "";
        $CONTAINER.innerHTML = await promise.text();
      }
    } catch (error) {}

    window.history.pushState({}, "done", page);
    document.title = page;
  }

  initRouter() {
    const {
      location: { pathname = "/" },
    } = window;
    const URL = pathname === "/" ? "home" : pathname.replace("/", "");
    this.load(URL);
  }
}
