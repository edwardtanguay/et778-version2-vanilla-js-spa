import { home } from "./pages/home.js";
import { contact } from "./pages/contact.js";
import { about } from "./pages/about.js";
import { notFound } from "./pages/notFound.js";

const routes = {
  "/": home(),
  "/about": about(),
  "/contact": contact(),
};

export function renderCurrentPage(pathname) {
  console.log("pathname", pathname);
  if (pathname === "/index.html") {
    document.querySelector("main").innerHTML = home();
    return;
  }
  if (routes[pathname] === undefined) {
    document.querySelector("main").innerHTML = notFound();
    return;
  }
  document.querySelector("main").innerHTML = routes[pathname];
}
