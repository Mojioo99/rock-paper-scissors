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
  lizardBtn = document.querySelector(".lizard");
  spockBtn = document.querySelector(".spock");
  rockBtn.onclick = function () {
    actions(this);
  };
  paperBtn.onclick = function () {
    actions(this);
  };
  scissorsBtn.onclick = function () {
    actions(this);
  };
  lizardBtn.onclick = function () {
    actions(this);
  };
  spockBtn.onclick = function () {
    actions(this);
  };
}

let rockBtn = document.querySelector(".rock");
let paperBtn = document.querySelector(".paper");
let scissorsBtn = document.querySelector(".scissors");
let lizardBtn = document.querySelector(".lizard");
let spockBtn = document.querySelector(".spock");
let rockBtn2 = document.querySelector(".rock");
let paperBtn2 = document.querySelector(".paper");
let scissorsBtn2 = document.querySelector(".scissors");
let lizardBtn2 = document.querySelector(".lizard");
let spockBtn2 = document.querySelector(".spock");
let buttons = [rockBtn2, paperBtn2, scissorsBtn2, lizardBtn2, spockBtn2];
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
lizardBtn.onclick = function () {
  actions(this);
};
spockBtn.onclick = function () {
  actions(this);
};
function actions(el) {
  cardsContainer.classList.toggle("hidden");
  gameContainer.classList.toggle("hidden");
  pick1.appendChild(el);
  setTimeout(() => {
    empty.classList.toggle("hidden");
    pick2.classList.toggle("hidden");
    let housePick = buttons[Math.floor(Math.random() * buttons.length)];

    pick2.appendChild(housePick);
    pick1.children[0].style.boxShadow = "none";
    pick2.children[0].style.boxShadow = "none";
    resultText.style.boxShadow = "none";
  }, 500);
  setTimeout(() => {
    result.classList.toggle("hidden");
    if (
      pick1.children[0].classList.contains("rock") &&
      pick2.children[0].classList.contains("rock")
    ) {
      draw();
    } else if (
      pick1.children[0].classList.contains("rock") &&
      pick2.children[0].classList.contains("paper")
    ) {
      lose();
    } else if (
      pick1.children[0].classList.contains("rock") &&
      pick2.children[0].classList.contains("scissors")
    ) {
      win();
    } else if (
      pick1.children[0].classList.contains("rock") &&
      pick2.children[0].classList.contains("spock")
    ) {
      lose();
    } else if (
      pick1.children[0].classList.contains("rock") &&
      pick2.children[0].classList.contains("lizard")
    ) {
      win();
    } else if (
      pick1.children[0].classList.contains("paper") &&
      pick2.children[0].classList.contains("paper")
    ) {
      draw();
    } else if (
      pick1.children[0].classList.contains("paper") &&
      pick2.children[0].classList.contains("scissors")
    ) {
      lose();
    } else if (
      pick1.children[0].classList.contains("paper") &&
      pick2.children[0].classList.contains("rock")
    ) {
      win();
    } else if (
      pick1.children[0].classList.contains("paper") &&
      pick2.children[0].classList.contains("spock")
    ) {
      win();
    } else if (
      pick1.children[0].classList.contains("papaer") &&
      pick2.children[0].classList.contains("lizard")
    ) {
      lose();
    } else if (
      pick1.children[0].classList.contains("scissors") &&
      pick2.children[0].classList.contains("scissors")
    ) {
      draw();
    } else if (
      pick1.children[0].classList.contains("scissors") &&
      pick2.children[0].classList.contains("rock")
    ) {
      lose();
    } else if (
      pick1.children[0].classList.contains("scissors") &&
      pick2.children[0].classList.contains("paper")
    ) {
      win();
    } else if (
      pick1.children[0].classList.contains("scissors") &&
      pick2.children[0].classList.contains("spock")
    ) {
      lose();
    } else if (
      pick1.children[0].classList.contains("scissors") &&
      pick2.children[0].classList.contains("lizard")
    ) {
      win();
    } else if (
      pick1.children[0].classList.contains("lizard") &&
      pick2.children[0].classList.contains("rock")
    ) {
      lose();
    } else if (
      pick1.children[0].classList.contains("lizard") &&
      pick2.children[0].classList.contains("paper")
    ) {
      win();
    } else if (
      pick1.children[0].classList.contains("lizard") &&
      pick2.children[0].classList.contains("scissors")
    ) {
      lose();
    } else if (
      pick1.children[0].classList.contains("lizard") &&
      pick2.children[0].classList.contains("spock")
    ) {
      win();
    } else if (
      pick1.children[0].classList.contains("lizard") &&
      pick2.children[0].classList.contains("lizard")
    ) {
      draw();
    } else if (
      pick1.children[0].classList.contains("spock") &&
      pick2.children[0].classList.contains("rock")
    ) {
      win();
    } else if (
      pick1.children[0].classList.contains("spock") &&
      pick2.children[0].classList.contains("paper")
    ) {
      lose();
    } else if (
      pick1.children[0].classList.contains("spock") &&
      pick2.children[0].classList.contains("scissors")
    ) {
      win();
    } else if (
      pick1.children[0].classList.contains("spock") &&
      pick2.children[0].classList.contains("lizard")
    ) {
      lose();
    } else if (
      pick1.children[0].classList.contains("spock") &&
      pick2.children[0].classList.contains("spock")
    ) {
      draw();
    }
    scoreBox.innerHTML = score;
  }, 1000);
}
function win() {
  resultText.innerHTML = "YOU WIN";
  score++;
  pick1.children[0].style.boxShadow = "0 0 1000px lightblue";
}
function lose() {
  resultText.innerHTML = "YOU LOSE";
  pick2.children[0].style.boxShadow = "0 0 1000px lightblue";
}
function draw() {
  resultText.innerHTML = "DRAW";
  resultText.style.boxShadow = "0 0 500px";
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
<div class="card scissors"></div>
<div class="card lizard">
</div><div class="card spock"></div>`;
  buttonSelect();
};
