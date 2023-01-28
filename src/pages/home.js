import createElementWithClassAndContent from "../create-element-custom-function.js";
import homeImage from "../assets/home.jpg";

const menuButton = createElementWithClassAndContent("button", "home-menu-button", "EXPLORE OUR MENU ➡");

function fill(main) {
  main.replaceChildren();
  const homeContainer = createElementWithClassAndContent("div", "home-container", "");
  const greeting = createElementWithClassAndContent("div", "home-greeting", "");
  const homeImageElem = createElementWithClassAndContent("img", "home-image", "");
  homeImageElem.src = homeImage;
  greeting.append(
    createElementWithClassAndContent("h1", "home-greeting-heading", "Welcome to Bistro Lounge"),
    createElementWithClassAndContent("div", "home-brief-description", "Delicious food at affordable prices"),
    createElementWithClassAndContent("div", "home-description", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),
    menuButton
  )
  homeContainer.append(
    greeting,
    homeImageElem
  )
  main.appendChild(homeContainer);
};

export default { 
  fill,
  menuButton
};