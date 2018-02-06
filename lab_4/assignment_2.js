var canvas = document.querySelector('canvas');

canvas.width = 0.8 * window.innerWidth;
canvas.height = 0.8 * window.innerHeight;

var context = canvas.getContext('2d');

context.fillStyle = 'orange';

var score = 0;
var timeLeft = 11;
var gameisStarted = false;
var rectData = {};
var rectSize = 100;

function generateRandomRect(rectSize) {
  clearCanvas(context);
  var rectDimension = {width: rectSize, height: rectSize};
  var initialPos = getRandomXY(rectDimension.width, rectDimension.height);
  rectData = {
    x: initialPos.x,
    y: initialPos.y,
    width: rectDimension.width,
    height: rectDimension.height
  };
  context.fillRect(initialPos.x, initialPos.y, rectDimension.width, rectDimension.height);
}

function getMouseXY(canvas, event) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: event.pageX - rect.left,
    y: event.pageY - rect.top
  };
}

function getRandomXY(rectWidth, rectHeight) {
  return {
    x: Math.floor(Math.random() * (canvas.width - rectWidth)),
    y: Math.floor(Math.random() * (canvas.height - rectHeight))
  };
}

function isClickedInsideRect(mousePos, rectData) {
  if (
    mousePos.x >= rectData.x &&
    mousePos.x <= rectData.x + rectData.width &&
    mousePos.y >= rectData.y &&
    mousePos.y <= rectData.y + rectData.height
  ) {
    return true;
  }
  return false;
}

function clearCanvas(context) {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

canvas.addEventListener('click', function(evt) {
  if (!gameisStarted) {
    startGame();
  } else if (gameisStarted) {
    var mousePos = getMouseXY(canvas, evt);
    if (isClickedInsideRect(mousePos, rectData)) {
      score += 1;
      updateResult();
      generateRandomRect(rectSize);
    }
  }
});

function startGame() {
  score = 0;
  timeLeft = 11;
  gameisStarted = true;
  generateRandomRect(rectSize);
  var intervalID = setInterval(function () {
    timeLeft -= 1;
    updateResult();
    if (timeLeft === 0) {
      gameisStarted = false;
      displayGameOver();
      clearCanvas(context);
      clearInterval(intervalID);
    }
  }, 1000);
}

function updateResult() {
  var resultEl = document.querySelector('#result');
  resultEl.innerHTML = "SCORE: " + score + " --- " + "TIME LEFT: " + timeLeft;
}

function displayGameOver() {
  var resultEl = document.querySelector('#result');
  resultEl.innerHTML = "GAME OVER, SCORE: " + score;
}

