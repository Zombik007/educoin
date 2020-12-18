// Функция запуска игры
function startGame() {
  createStartBlock();
  createTimerBlock(); // Создание timerBloock
  createScore(); // Функция создания блока счёта
  createLifes(); // Функция создания блока жизней
  startBtn.onclick = playGame;
}

startGame();

// Функция начала игры
function playGame() {
  timerGame(); // Функция запуска таймера
  createBall(); // Функция создания блока шарик
  //ball.style.display = "block"; // Отображает шарик
  stars.style.display = "block"; // Отображает очки
  lifes.style.display = "block"; // Отображает жизни
  startBlock.style.display = "none";
}


//Функция запуска таймера
function timerGame() {
  timer = setInterval(function () {
    timerBlock.innerText = timerBlock.innerText - 1;
    if (timerBlock.innerText == 0) {
      clearInterval(timer);
      endGame();
      createEndGame();
      timerBlock.innerText = "10";
    }
      }, 1000);
}

// Функция завершения игры
function endGame() {
  deleteLifes();
  deleteStars();
  deleteTimerBlock();
  clearPlayingField()
}
