// src/App.js
import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";

function App(rootElement) {
  // Header と Footer を描画
  rootElement.innerHTML = `
    ${Header()}
    <main id="main-content"></main>
    ${Footer()}
  `;
}

export default App;
