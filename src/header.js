import createElementWithClassAndContent from "./create-element-custom-function.js";

const home = createElementWithClassAndContent("a", "home-button", "Bistro Lounge");
home.setAttribute("href", "");
const nav = document.createElement("nav");
const menu = createElementWithClassAndContent("span", "nav-button", "Menu");
const contact = createElementWithClassAndContent("span", "nav-button", "Contact");
const about = createElementWithClassAndContent("span", "nav-button", "About");

function fill(header) {
  nav.append(menu, contact, about);
  header.append(home, nav);
};

export default {
  fill,
  home,
  menu,
  contact,
  about,
};
