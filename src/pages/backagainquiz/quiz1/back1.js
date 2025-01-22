document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".options button");
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  document.body.appendChild(overlay);

  const nextButton = document.getElementById("nextButton");
  const correctAnswer = "継ぎ目のない";

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const isCorrect = button.textContent === correctAnswer;
      if (isCorrect) {
        overlay.innerHTML =
          "<p><strong>正解！</strong><br>すごい！クリアできたね！</p>";
        overlay.style.backgroundColor = "#b4c0ff";
        nextButton.style.backgroundColor = "blue";
      } else {
        overlay.innerHTML = `<p><strong>不正解...😭</strong><br>正解は「${correctAnswer}」だよ！</p>`;
        overlay.style.backgroundColor = "#FF9698";
        nextButton.style.backgroundColor = "#FF5E61";
      }
      overlay.classList.add("show");

      nextButton.style.pointerEvents = "auto";

      buttons.forEach((btn) => {
        btn.disabled = true;
      });
    });
  });
});
