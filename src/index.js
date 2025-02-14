// src/index.js
import App from "./app.js";
import HomePage from "./pages/home/home.js";

document.addEventListener("DOMContentLoaded", () => {
  // HTML の #app に内容を挿入
  const rootElement = document.getElementById("app");
  App(rootElement);

  // ページの初期表示を設定
  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = HomePage();
});
