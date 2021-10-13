const imgs = document.querySelectorAll("img");
let uScore = 0;
let cScore = 0;
let userChoice;
let computerChoice;

imgs.forEach((img) => {
  img.addEventListener("click", () => {
    userChoice = img.alt;
    console.log(img.alt);
    computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice);
    calculate();
  });
});

function calculate() {
  if (uScore < 5 || cScore < 5) {
    if (
      (computerChoice == 0 && userChoice == "Paper") ||
      (computerChoice == 1 && userChoice == "Scissor") ||
      (computerChoice == 2 && userChoice == "Rock")
    ) {
      uScore += 1;
      document.querySelector(
        ".uScore"
      ).innerHTML = `<h3 class="cScore">User Scores : ${uScore}</h3>`;
      document.querySelector('.result').innerHTML = 'You won the turn!'
    } else if (
      (userChoice == "Paper" && computerChoice == 1) ||
      (userChoice == "Rock" && computerChoice == 2) ||
      (userChoice == "Scissor" && computerChoice == 0)
    ) {
      cScore += 1;
      document.querySelector(
        ".cScore"
      ).innerHTML = `<h3 class="cScore">Computer Scores : ${cScore}</h3>`;
      document.querySelector('.result').innerHTML = 'Computer won the turn!'
    } else {
        document.querySelector('.result').innerHTML = 'The turn is tie'
    }
  }
  if (cScore == 5 || uScore == 5) {
    document.querySelector(".popup").classList.add("active");
    if (cScore == 5) {
      document.querySelector(
        ".popup h3"
      ).innerHTML = `Computer has won the game by ${cScore} - ${uScore}!!!`;
      document.querySelector(
        ".uScore"
      ).innerHTML = `<h3 class="cScore">User Scores : ${(uScore = 0)}</h3>`;

      document.querySelector(
        ".cScore"
      ).innerHTML = `<h3 class="cScore">Computer Scores : ${(cScore = 0)}</h3>`;
    } else {
      document.querySelector(
        ".popup h3"
      ).innerHTML = `User has won the game by ${uScore} - ${cScore}!!!`;
      document.querySelector(
        ".uScore"
      ).innerHTML = `<h3 class="cScore">User Scores : ${(uScore = 0)}</h3>`;

      document.querySelector(
        ".cScore"
      ).innerHTML = `<h3 class="cScore">Computer Scores : ${(cScore = 0)}</h3>`;
    }
  }
}

document.querySelector(".popup button").addEventListener("click", () => {
  document.querySelector(".popup").classList.remove("active");
  document.querySelector('.result').innerHTML = `Let's start again`;
});
