import Router from "./router.js";
import { showData } from "./src/hooks/useMockData.js";
function App() {
  let router = new Router();

  router.load();
}
App();
