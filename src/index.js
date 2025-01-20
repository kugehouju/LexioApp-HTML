// src/index.js
import App from "./app.js";

document.addEventListener("DOMContentLoaded", () => {
  // HTML の #app に内容を挿入
  const rootElement = document.getElementById("app");
  App(rootElement);
});
