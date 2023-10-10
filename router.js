export default class Router {
  constructor() {
    this.initRouter();
    this.popState();
  }

  static getPageUrl(page) {
    return `${window.location.origin}/src/pages/${page}`;
  }
  beforeRefresh() {
    this.initRouter();
    this.beforeRefresh();
  }

  static renderPage(content) {
    const $CONTAINER = document.querySelector("#app");
    $CONTAINER.innerHTML = "";
    $CONTAINER.innerHTML = content;
  }

  static updateHistoryAndTitle(page, content) {
    history.pushState(content, page, page);

    document.title = page;
  }

  async load(page = "home", update = true) {
    try {
      const promise = await fetch(Router.getPageUrl(page));
      if (promise.ok) {
        const content = await promise.text();

        localStorage.setItem("page", content);
        Router.renderPage(content);
        if (update)
          // Router.updateHistoryAndTitle(page, localStorage.getItem("page"));
          return content;
      }
    } catch (error) {
      Router.handleError(error);
    }
  }

  initRouter() {
    const page = window.location.pathname.replace("/", "") || "home";
    this.load(page);
  }

  async popState() {
    window.addEventListener("popstate", async () => {
      const page = window.location.pathname.replace("/", "");
      const content = await this.load(page);
      Router.updateHistoryAndTitle(page, content);
    });
  }
}
