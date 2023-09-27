export default class Router {
  constructor() {
    this.initRouter();
    this.popState();
  }

  async load(page = "home") {
    try {
      const promise = await fetch(
        `${window.location.origin}/src/pages/${page}.html`
      );
      if (promise.ok) {
        const $CONTAINER = document.querySelector("#app");
        $CONTAINER.innerHTML = "";
        localStorage.setItem("page", await promise.text());
        $CONTAINER.innerHTML = localStorage.getItem("page");
        // window.history.pushState(
        //   { data: localStorage.getItem("page") },
        //   page,
        //   page
        // );
      }
    } catch (error) {}

    document.title = page;
  }

  initRouter() {
    const {
      location: { pathname = "/" },
    } = window;
    const URL = pathname === "/" ? "/" : pathname.replace("/", "");
    this.load(URL);
  }
  popState() {
    window.addEventListener("popstate", () => {
      const page = window.location.pathname.replace("/", "");
      this.load(page);
    });
  }
}
