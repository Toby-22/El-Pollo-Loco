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
  <div class="retry-btn" onclick="restartGame()"><img class="retryIcon" src="img/revolver.svg"/>Retry</div>`;
}

function restartGame(){
  console.log("Retry Button is pressed");
  location.reload();
}

