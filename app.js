import { routes } from "./routes.js";
import { nav } from "./nav.js";

const navElem = document.querySelector("nav");
navElem.innerHTML = nav;
const navElemLinkElems = navElem.querySelectorAll("a");

const mainElem = document.querySelector("main");
mainElem.innerHTML = routes[window.location.pathname] || routes["/"];

const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  mainElem.innerHTML = routes[pathname];
};

navElemLinkElems.forEach((linkElem) => {
  linkElem.addEventListener("click", (event) => {
    event.preventDefault();
    onNavigate(linkElem.getAttribute("href"));
  });
});

window.onpopstate = () => {
  mainElem.innerHTML = routes[window.location.pathname] || routes["/"];
};
