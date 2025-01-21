// src/dic.js
import App from "./app.js";
import DictionaryPage from "./pages/dictionary/dictionary.js";

document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("app");
  App(rootElement);

  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = DictionaryPage();
});
