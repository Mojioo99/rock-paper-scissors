const button = document.querySelector(".rules");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

button.onclick = function () {
  modal.classList.toggle("hidden");
};
close.onclick = function () {
  modal.classList.toggle("hidden");
};
window.onclick = function (e) {
  if (e.target == modal) {
    modal.classList.toggle("hidden");
  }
};
function buttonSelect() {
  rockBtn = document.querySelector(".rock");
  paperBtn = document.querySelector(".paper");
  scissorsBtn = document.querySelector(".scissors");
  rockBtn.onclick = function () {
    actions(this);
  };
  paperBtn.onclick = function () {
    actions(this);
  };
  scissorsBtn.onclick = function () {
    actions(this);
  };
}

let rockBtn = document.querySelector(".rock");
let paperBtn = document.querySelector(".paper");
let scissorsBtn = document.querySelector(".scissors");
let rockBtn2 = document.querySelector(".rock");
let paperBtn2 = document.querySelector(".paper");
let scissorsBtn2 = document.querySelector(".scissors");
let buttons = [rockBtn2, paperBtn2, scissorsBtn2];
let cardsContainer = document.querySelector(".cards-container");
let gameContainer = document.querySelector(".game-container");
let empty = document.querySelector(".empty");
let pick1 = document.querySelector(".pick1");
let result = document.querySelector(".col:nth-child(2)");
let pick2 = document.querySelector(".pick2");
let playAgainBtn = document.querySelector(".col button");
let resultText = document.querySelector(".col:nth-child(2) h2");
let scoreBox = document.querySelector(".score h1");
let score = 0;
rockBtn.onclick = function () {
  actions(this);
};
paperBtn.onclick = function () {
  actions(this);
};
scissorsBtn.onclick = function () {
  actions(this);
};
function actions(el) {
  cardsContainer.classList.toggle("hidden");
  gameContainer.classList.toggle("hidden");
  pick1.appendChild(el);
  setTimeout(() => {
    empty.classList.toggle("hidden");
    pick2.classList.toggle("hidden");
    let housePick = buttons[Math.floor(Math.random() * 3)];

    pick2.appendChild(housePick);
    pick1.children[0].style.boxShadow = "none";
    pick2.children[0].style.boxShadow = "none";
    resultText.style.boxShadow='none'

  }, 500);
  setTimeout(() => {
    result.classList.toggle("hidden");
    if (
      pick1.children[0].classList.contains("rock") &&
      pick2.children[0].classList.contains("rock")
    ) {
      resultText.innerHTML = "DRAW";
      resultText.style.boxShadow='0 0 500px'
    } else if (
      pick1.children[0].classList.contains("rock") &&
      pick2.children[0].classList.contains("paper")
    ) {
      resultText.innerHTML = "YOU LOSE";
      pick2.children[0].style.boxShadow = "0 0 1000px lightblue";
    } else if (
      pick1.children[0].classList.contains("rock") &&
      pick2.children[0].classList.contains("scissors")
    ) {
      resultText.innerHTML = "YOU WIN";
      score++;
      pick1.children[0].style.boxShadow = "0 0 1000px lightblue";
    } else if (
      pick1.children[0].classList.contains("paper") &&
      pick2.children[0].classList.contains("paper")
    ) {
      resultText.innerHTML = "DRAW";
      resultText.style.boxShadow='0 0 500px'
    } else if (
      pick1.children[0].classList.contains("paper") &&
      pick2.children[0].classList.contains("scissors")
    ) {
      resultText.innerHTML = "YOU LOSE";
      pick2.children[0].style.boxShadow = "0 0 1000px lightblue";
    } else if (
      pick1.children[0].classList.contains("paper") &&
      pick2.children[0].classList.contains("rock")
    ) {
      resultText.innerHTML = "YOU WIN";
      score++;
      pick1.children[0].style.boxShadow = "0 0 1000px lightblue";
    } else if (
      pick1.children[0].classList.contains("scissors") &&
      pick2.children[0].classList.contains("scissors")
    ) {
      resultText.innerHTML = "DRAW";
      resultText.style.boxShadow='0 0 500px'
    } else if (
      pick1.children[0].classList.contains("scissors") &&
      pick2.children[0].classList.contains("rock")
    ) {
      resultText.innerHTML = "YOU LOSE";
      pick2.children[0].style.boxShadow = "0 0 1000px lightblue";
    } else if (
      pick1.children[0].classList.contains("scissors") &&
      pick2.children[0].classList.contains("paper")
    ) {
      resultText.innerHTML = "YOU WIN";
      score++;
      pick1.children[0].style.boxShadow = "0 0 1000px lightblue";
    }
    scoreBox.innerHTML = score;
  }, 1000);
}

playAgainBtn.onclick = function () {
  cardsContainer.classList.toggle("hidden");
  gameContainer.classList.toggle("hidden");
  empty.classList.toggle("hidden");
  pick2.classList.toggle("hidden");
  pick2.innerHTML = "";
  pick1.innerHTML = "";
  result.classList.toggle("hidden");
  cardsContainer.innerHTML = `<div class="card rock"></div>
<div class="card paper"> </div>
<div class="card scissors"></div>`;
  buttonSelect();
};
