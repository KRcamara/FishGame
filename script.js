document.addEventListener("DOMContentLoaded", function() {
  
  const width = 600;
  const height = 400;

  let mainFish = document.getElementById("main-fish");
  let scoreValue = document.getElementById("score-value");
  let fishesContainer = document.getElementById("fishes");
  let levelValue = document.getElementById("level-value");
  let mainFishScoreValue = document.getElementById("main-fish-score");
  let timer = 30; 
  let gameRunning = true; 
  let timerValue = document.getElementById("timer-value");
  let mainFishScore = 7;
  

  mainFish.dataset.score = 5;
  let score = 0;

  function updateScore() {
    scoreValue.innerHTML = score;
  }

  function updateMainFishScore() {
    mainFishScoreValue.innerHTML = mainFishScore;
  }
  function updateTimer() {
    timerValue.innerHTML = timer;
  }
  

    function moveMainFish(event) {
    let mouseX = event.clientX - mainFish.offsetWidth / 2;
    let mouseY = event.clientY - mainFish.offsetHeight / 2;
    mainFish.style.left = mouseX + "px";
    mainFish.style.top = mouseY + "px";
  }

 
  function handleFishClick() {
    if (!gameRunning) {
      return;
    }
    let clickedFishScore = parseInt(this.dataset.score);
    //let mainFishScore = parseInt(mainFish.dataset.score);
    if (clickedFishScore <= mainFishScore){
      score += clickedFishScore;
      mainFishScore += clickedFishScore;
      updateScore();
      updateMainFishScore();
      fishesContainer.removeChild(this);
      if (fishesContainer.childElementCount === 0) {
        nextLevel();
      }
     }
    }
  
  
 
  function createFish() {
    let fish = document.createElement("div");
    fish.className = "fish";
    fish.style.left = Math.floor(Math.random() * ( width - 30)) + "px";
    fish.style.top = Math.floor(Math.random() * (400 - 50)) + "px";
    fish.dataset.score = Math.floor(Math.random() * 15) + 2;
    fish.textContent = fish.dataset.score;
    fish.addEventListener("click", handleFishClick);
    fishesContainer.appendChild(fish);
  }

  
  for (let i = 0; i < 10; i++) {
    createFish();
  }

  
  document.addEventListener("mousemove", moveMainFish);

let level = 1;
let fishCount = 5;

function nextLevel() {
  level++;
  fishCount += 5;
  fishesContainer.innerHTML = "";
  for (let i = 0; i < fishCount; i++) {
    createFish();
  }
  updateLevel();
}

function updateLevel() {
  levelValue.innerHTML = level;
}

  
  updateScore();

  function checkGameState() {
    if (timer === 0) {
      if (score >= 300) {
        alert("!!Felicidades¡¡ ¡Has ganado!");
      } else {
        alert("!Lo siento¡ ¡Has perdido!");
      }
      gameRunning = false;
      playButton.disabled = false;
    }
  }
   
  function updateGame() {
    if (gameRunning) {
      timer--;
      updateTimer();
      checkGameState();
    }
  }
  setInterval(updateGame, 1000);

  
  
  
});
