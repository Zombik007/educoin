/*==================================
    Функции создания элементов игры
==================================*/

// Функция создает стартовою кнопку "Start Game"
function createStartBlock() {
  // Создается блок див
  startBlock = document.createElement("div");
  startBlock.id = "start-block";
  // Создается кнопка "Start Game"
  //startBtn = document.createElement("button");
  startBtn.id = "start-btn";
  startBtn.innerText = "Start Game";
  playingField.id = "playing-field";
  // Добавляется кнопка "Start Game" в стартовый блок
  startBlock.appendChild(startBtn);
  playingField.appendChild(startBlock);
  document.body.appendChild(playingField);
}

//Функция создания шариков
function createBall() {
  var ball = document.createElement("div");
  // ball.className = "ball left";
  // ball.className = "ball right";

  var nav = random(2);
  if (nav == 1) {
    ball.className = "ball left";
  } else if (nav == 2) {
    ball.className = "ball right";
  }

  playingField.appendChild(ball);
  ball.style.display = "block";
  ball.onmousemove = function () {
    if (ball.className != "ball ready-delete") {
      score = score + randNumb(4);
      stars.innerText = score;

      //Удаление и пересоздание шарика
      setTimeout(function () {
        ball.remove();

        var realBall = document.querySelector(".ball");
        if (realBall == null) {
          var a = randNumb(4);
          var b = 0;
          while (b < a) {
            createBall();
            b += 1;
            console.log("b = " + b);
          }
        }
      }, 200);
    }
    ball.className = "ball ready-delete";
  };

  setTimeout(function () {
    ball.style.top = random(350) + "px";
    ball.style.left = random(550) + "px";
  }, 200);
    
  setTimeout(function () {
    ball.style.transition = "all 0s";
    var timerFall = setInterval(function () {
      ball.style.top = ball.offsetTop + 2 + "px";
       if (ball.offsetTop > 450) {
       ball.remove();
        createBall();
       quantityLifes = quantityLifes - 1;
         deleteLifes()
         createLifes()
         clearInterval(timerFall);
    
       }

    }, 10)

  }, 1000);
}

//Функция создания счёта
function createScore() {
  stars = document.createElement("div");
  stars.id = "stars";
  stars.innerText = 0;
  playingField.appendChild(stars);
}

//Функция создания обратного отсчета
function createTimerBlock() {
  //var infoBlock = document.createElement("div");
  infoBlock.id = "info-block";

  var h2 = document.createElement("h2");
  h2.innerText = "Left Time: ";

  timerBlock = document.createElement("span");
  timerBlock.id = "left-time";
  timerBlock.innerText = "10";
  h2.appendChild(timerBlock);
  infoBlock.appendChild(h2);
  document.body.appendChild(infoBlock);
}

//Функция создания блока жизней
function createLifes() {
  lifes = document.createElement("div");
  lifes.id = "lifes";
  //playingField.appendChild(lifes);
  // var quantityLifes = 5;
  // Переменная для хранения текущего количества жизней
  var currentNumberLifes = 0;
  //
  while (currentNumberLifes < quantityLifes) {
    // Cоздаем элементы жизней
    var lifeBlock = document.createElement("span");
    lifes.appendChild(lifeBlock);
    currentNumberLifes = currentNumberLifes + 1;
    playingField.appendChild(lifes);
  }
}

//Функция создания блока с надписью "Game Over", "Your score:"
function createEndGame() {
  var div = document.createElement("div");
  div.id = "end-block";

  var h2 = document.createElement("h2");
  h2.innerText = "Game Over";

  var h3 = document.createElement("h3");
  h3.innerText = "Your score: " + score;

  div.appendChild(h2);
  div.appendChild(h3);

  playingField.appendChild(div);
}


/*========================
    Удаление элементов
========================*/

//Удаление стартового блока
function deleteStartBlock() {
  var startBlock = document.querySelector("start-block");
  startBlock.remove();
}

//Удаление блока жизней
function deleteLifes() {
  lifes.remove();
}

//Удаление блока очков
function deleteStars() {
  stars.remove();
}

//Удаление блока таймера
function deleteTimerBlock() {
  infoBlock.remove();
}

// function deleteLifesBlock() {
//   lifeBlock.remove();
// }

function clearPlayingField() {
  playingField.innerHTML = "";
}

/*=============================
    Функции случайных чисел
=============================*/

//Функция создания случайного целого числа для смены координаты
function random(max) {
  var randomNumber = Math.random() * (max + 1);
  randomNumber = Math.floor(randomNumber);
  return randomNumber;
}

//Функция создания случайного целого числа для изменения количества очков
function randNumb(max) {
  var randNumb = 1 + Math.random() * (max + 1);
  randNumb = Math.floor(randNumb);
  return randNumb;
}
