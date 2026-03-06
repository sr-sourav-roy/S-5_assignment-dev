let increase = 0;
let decrease = 6;

const increaseEl = document.getElementById("increaseCounter");
const decreaseEI = document.getElementById("decreaseCounter");
const cards = document.querySelectorAll(".card");
const transaction = document.getElementById("transaction");
const clearHistory =
  // const clearHistory = document.getElementById("clear-history");

  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      if (increase < 6) {
        increase++;
        decrease--;

        increaseEl.innerText = increase;
        decreaseEI.innerText = decrease;

        // Transaction add
        const li = document.createElement("li");
        li.textContent = ` click card ${index + 1}`;
        transaction.appendChild(li);

        // card disabled:
        card.disabled = true;
        // notifications:
        alert("okky");
      }
    });
  });

// clearHistory.onclick = function () {
//   while (history.transaction) {
//     history.removeChild(history.transaction);
//   }
// };
