var urlParams = new URLSearchParams(window.location.search);
console.log(urlParams);
var score = urlParams.get("score");

var scoreBoard = document.getElementById("score-board");

var playAgainButton = document.getElementById("play-again-button");

scoreBoard.innerHTML = score;
playAgainButton.onclick = (evt) => {
  location.href = "./game.html";
};