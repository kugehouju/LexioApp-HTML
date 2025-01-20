// src/App.js
import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";
import HomePage from "./pages/Home.js";

function App(rootElement) {
  // Header を描画
  rootElement.innerHTML = `
    ${Header()}
    <main id="main-content"></main>
    ${Footer()}
  `;

  // ページを切り替えたり、初期表示を設定
  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = HomePage();
}

export default App;
