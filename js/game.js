let canvas;
let world;
let keyboard = new Keyboard();

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
}

window.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "Space":
      keyboard.SPACE = true;
      break;
    case "ArrowUp":
      keyboard.UP = true;
      break;
    case "ArrowDown":
      keyboard.DOWN = true;
      break;
    case "ArrowLeft":
      keyboard.LEFT = true;
      break;
    case "ArrowRight":
      keyboard.RIGHT = true;
      break;
  }
});

window.addEventListener("keyup", (e) => {
  switch (e.code) {
    case "Space":
      keyboard.SPACE = false;
      break;
    case "ArrowUp":
      keyboard.UP = false;
      break;
    case "ArrowDown":
      keyboard.DOWN = false;
      break;
    case "ArrowLeft":
      keyboard.LEFT = false;
      break;
    case "ArrowRight":
      keyboard.RIGHT = false;
      break;
  }
});

function enterFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
    element.msRequestFullscreen();
  } else if(element.webkitRequestFullscreen) {  // iOS Safari
    element.webkitRequestFullscreen();
  }
};

function playGame(){
  console.log('Game is started');
  initLevel1();
  init();
  showGameScreen();
}

/**
 * Hides the start screen
 */
function showGameScreen(){
  let startScreen = document.getElementById('startscreen');
  let gameScreen = document.getElementById('fullscreen');
  startScreen.classList.add('dnone');
  gameScreen.classList.remove('dnone');
}

/**
 * Hides the game screen
 */
function showStartScreen(){
  let startScreen = document.getElementById('startscreen');
  let gameScreen = document.getElementById('fullscreen');
  startScreen.classList.remove('dnone');
  gameScreen.classList.add('dnone');
}

function gameOver(){
  world.stopAllIntervals();
  let gameOverDiv = document.getElementById('game-over');
  gameOverDiv.innerHTML = /*html*/ `<img class="game-over" src='img/9_intro_outro_screens/game_over/you lost.png'>
  <div class="retry-btn btn" onclick="restartGame()"><img class="retryIcon" src="img/revolver.svg"/>Retry</div>`;
}

function gameWon(){
  world.stopAllIntervals();
  let gameWonDiv = document.getElementById('game-won');
  gameWonDiv.innerHTML = /*html*/ `<div class="blur-background"><h2 class="game-won">You won the game!</h2>
  <div class="retry-btn btn" onclick="restartGame()"><img class="retryIcon" src="img/revolver.svg"/>Retry</div></div>`;
}

function restartGame(){
  console.log("Retry Button is pressed");
  location.reload();
}

function showKeyLegend(){
  let startScreenDiv = document.getElementById('startscreen');
  startScreenDiv.innerHTML += /*html*/ `<div id="keyboard"><div class="blur-background"><img class="closeButton" src="img/close2.svg" onclick="hideKeyLegend()"/>
  <img class="key-legend" src="img/tastatur-removebg.png"/>`
}

function hideKeyLegend(){
  let startScreenDiv = document.getElementById('startscreen');
  startScreenDiv.innerHTML = /*html*/ `<img class="startImg" src="img/9_intro_outro_screens/start/startscreen_1.png" alt="" />
  <div class="startNavigation">
    <div class="btn" onclick="playGame()"><img class="retryIcon" src="img/revolver.svg"/>Play</div>
    <img class ="startNavigationIcon" src="img/keyboard.svg" alt="keyboard" onclick="showKeyLegend()"/>
  </div>`
}