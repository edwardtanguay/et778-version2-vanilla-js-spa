import { renderCurrentPage } from "./router.js";
import { attachNavEvents, nav } from "./nav.js";

document.querySelector("#root").innerHTML = `
${nav()}
<main></main>`;

renderCurrentPage("/");
attachNavEvents();

window.onpopstate = () => {
  renderCurrentPage(window.location.pathname);
};
