import headerModule from "./header.js";
import footerModule from "./footer.js";
import homePage from "./pages/home.js";
import menuPage from "./pages/menu.js";
import contactPage from "./pages/contact.js";
import aboutPage from "./pages/about.js";
import "./styles/style.css";
import "./styles/header.css";
import "./styles/footer.css";
import "./styles/home.css";
import "./styles/menu.css";
import "./styles/contact.css";
import "./styles/about.css";
import background from "./assets/background.jpg";

const body = document.querySelector("body");
const header = document.createElement("header");
const main = document.createElement("main");
const footer = document.createElement("footer");

console.log(background);
body.style.backgroundImage = `url(${background})`;

function initialLoad() {
  body.append(header, main, footer);
  headerModule.fill(header);
  homePage.fill(main);
  footerModule.fill(footer);

  headerModule.menu.addEventListener("click", () => menuPage.fill(main));
  headerModule.contact.addEventListener("click", () => contactPage.fill(main));
  headerModule.about.addEventListener("click", () => aboutPage.fill(main));
  homePage.menuButton.addEventListener("click", () => menuPage.fill(main));
}

// Detect scroll direction and hide header
let lastState = 0;
window.addEventListener("scroll", () => {
  const currentState = window.pageYOffset
  if (currentState > lastState) {
    header.className = "hidden";
  } else if (currentState < lastState) {
    header.className = "";
  }
  lastState = currentState;
})

initialLoad();