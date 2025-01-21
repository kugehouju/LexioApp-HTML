// src/repeat.js
import App from "./app.js";
import BackAgainPage from "./pages/backagain/backagain.js";

document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("app");
  App(rootElement);

  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = BackAgainPage();
});
