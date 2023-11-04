let canvas;
let world;
let keyboard = new Keyboard();
let gameOver_sound = new Audio("sounds/game_over.mp3");
let gameSound = new Audio("sounds/main_song.mp3");
let winningSound = new Audio("sounds/winning_sound.mp3");
let allSounds = [gameSound];
function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
}
let mute = true;

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

/**
 * this function checks if a toch button is touched
 */
function touchButtonListener() {
  document.getElementById("button-left").addEventListener("touchstart", (e) => {
    keyboard.LEFT = true;
  });
  document.getElementById("button-left").addEventListener("touchend", (e) => {
    keyboard.LEFT = false;
  });
  document
    .getElementById("button-right")
    .addEventListener("touchstart", (e) => {
      keyboard.RIGHT = true;
    });
  document.getElementById("button-right").addEventListener("touchend", (e) => {
    keyboard.RIGHT = false;
  });
  document.getElementById("button-jump").addEventListener("touchstart", (e) => {
    keyboard.UP = true;
  });
  document.getElementById("button-jump").addEventListener("touchend", (e) => {
    keyboard.UP = false;
  });
  document
    .getElementById("button-throw")
    .addEventListener("touchstart", (e) => {
      keyboard.SPACE = true;
    });
  document.getElementById("button-throw").addEventListener("touchend", (e) => {
    keyboard.SPACE = false;
  });
}

/**
 * this function shows the canvas in fullscreen mode
 */
function enterFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.msRequestFullscreen) {
    // for IE11 (remove June 15, 2022)
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    // iOS Safari
    element.webkitRequestFullscreen();
  }
}

/**
 * this function starts the game
 */
function playGame() {
  initLevel1();
  init();
  showGameScreen();
  touchButtonListener();
}

/**
 * This funciton hides the start screen
 */
function showGameScreen() {
  let startScreen = document.getElementById("startscreen");
  let gameScreen = document.getElementById("fullscreen");
  startScreen.classList.add("dnone");
  gameScreen.classList.remove("dnone");
}

/**
 * this function hides the game screen
 */
function showStartScreen() {
  world.stopAllIntervals();
  let startScreen = document.getElementById("startscreen");
  let gameScreen = document.getElementById("fullscreen");
  startScreen.classList.remove("dnone");
  gameScreen.classList.add("dnone");
}

/**
 * this function sets the game to game over
 */
function gameOver() {
  world.stopAllIntervals();
  gameOver_sound.play();
  let gameOverDiv = document.getElementById("game-over");
  gameOverDiv.innerHTML = /*html*/ `<img class="game-over" src='img/9_intro_outro_screens/game_over/you lost.png'>
  <div class="retry-btn btn" onclick="restartGame()"><img class="retryIcon" src="img/revolver.svg"/>Retry</div>`;
}

/**
 * this function sets the game to win
 */
function gameWon() {
  world.stopAllIntervals();
  winningSound.play();
  let gameWonDiv = document.getElementById("game-won");
  gameWonDiv.innerHTML = /*html*/ `<div class="blur-background"><h2 class="game-won">You won the game!</h2>
  <div class="retry-btn btn" onclick="restartGame()"><img class="retryIcon" src="img/revolver.svg"/>Retry</div></div>`;
}

/**
 * this funciton restart the game
 */
function restartGame() {
  console.log("Retry Button is pressed");
  location.reload();
}

/**
 * this function shows the keyboard legend
 * @param {id} id
 */
function showKeyLegend(id) {
  let keyboardLegend = document.getElementById(id);
  keyboardLegend.style.display = "";
}

/**
 * this function hides the keyboard legend
 * @param {id} id
 */
function hideKeyLegend(id) {
  let keyboardLegend = document.getElementById(id);
  keyboardLegend.style.display = "none";
}
