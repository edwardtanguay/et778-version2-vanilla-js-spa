import { renderCurrentPage } from "./router.js";

export function nav() {
  return /*html*/ `
<nav>
  <li>
    <a href="/">Home</a>
  </li>
  <li>
    <a href="/about">About</a>
  </li>
  <li>
    <a href="/contact">Contact</a>
  </li>
</nav>
`;
}

export function renderNav() {
  document.querySelector("nav").innerHTML = nav();
}

function onNavigate(pathname) {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  renderCurrentPage(pathname);
}

export function attachNavEvents() {
  const navElem = document.querySelector("nav");
  const navElemLinkElems = navElem.querySelectorAll("a");

  navElemLinkElems.forEach((linkElem) => {
    linkElem.addEventListener("click", (event) => {
      event.preventDefault();
      onNavigate(linkElem.getAttribute("href"));
    });
  });
}
