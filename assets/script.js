const questions = [
  {
    question: "Which one of the following is not a valid HTML tag?",
    options: ["div", "span", "req", "section"],
  },
  {
    question:
      "What is the standard direction of flex items unless otherwise specified?",
    options: ["row", "column", "diagonal", "reverse"],
  },
  {
    question:
      "If you wanted to style an HTML class, which character would you use?",
    options: ["#", "$", "&", "."],
  },
  {
    question: "When using comparisons, what does === describe?",
    options: [
      "Equal in type",
      "Equal in type and value",
      "Equal in value",
      "Not equal at all",
    ],
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading style sheet",
      "Central server system",
      "Client side syntax",
      "Colorful style signal",
    ],
  },
];


const warning = document.getElementById("warning")
const countEl = document.getElementById("counter");
const button = document.getElementById("start");
const timerEl = document.getElementById("timer");
const testQuestion = document.getElementById("question");
const testUl = document.getElementById("choices");
let test = document.querySelector("h2");
const btnOne = document.getElementById("btn-one");
const btnTwo = document.getElementById("btn-two");
const btnThree = document.getElementById("btn-three");
const btnFour = document.getElementById("btn-four");
const description = document.getElementById("description");
const score = document.getElementById("score");
const submit = document.getElementById("submit");
const initials = document.getElementById("initials");
let count = 0;
let timeLeft = 60;

function decrementTime() {
  timeLeft -= 5;
}

// This function preserves the arguments that we sent to create event listeners, and then removes them
function resetEventListeners() {
  btnOne.removeEventListener("click", decrementTime);
  btnTwo.removeEventListener("click", decrementTime);
  btnThree.removeEventListener("click", decrementTime);
  btnFour.removeEventListener("click", decrementTime);
}

initials.style.display = "none";
submit.style.display = "none";
btnOne.style.display = "none";
btnTwo.style.display = "none";
btnThree.style.display = "none";
btnFour.style.display = "none";
timerEl.textContent = `You have ${timeLeft} seconds left... are you ready?!`;

function countdown() {
  timerEl.textContent = `You have ${timeLeft} seconds left!`;
  timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = `You have ${timeLeft} seconds left!`;

    if (timeLeft === 0) {
      clearInterval(timeInterval);
      timerEl.textContent = "Time's Up";
      
    }
    if (timeLeft < 0) {
      clearInterval(timeInterval);
      timerEl.textContent = "Time's Up";
    }
  }, 1000);
}

button.addEventListener("click", function () {
  timeLeft = 60;
  button.style.display = "none";
  description.style.display = "none";
  countdown();
  questionOne();
  warning.style.display = "none"
});

function questionOne() {
  resetEventListeners();
  countEl.textContent = `${count} correct answers out of 5!`;
  btnOne.style.display = "block";
  btnTwo.style.display = "block";
  btnThree.style.display = "block";
  btnFour.style.display = "block";
  for (let i = 0; i < questions.length; i++) {
    test.textContent = questions[0].question;
    btnOne.textContent = questions[0].options[0];
    btnTwo.textContent = questions[0].options[1];
    btnThree.textContent = questions[0].options[2];
    btnFour.textContent = questions[0].options[3];
  }

  // add btn eventlistener to decrement 5second from time interval
  const wrongOptions = [btnOne, btnTwo, btnFour];

  for (i = 0; i < wrongOptions.length; i++) {
    const currentOption = wrongOptions[i];
    currentOption.addEventListener("click", decrementTime);
  }

  btnThree.addEventListener(
    "click",
    function () {
      questionTwo();
    },
    { once: true }
  );
}

function questionTwo() {
  resetEventListeners();

  count++;
  countEl.textContent = `${count} correct answers out of 5!`;
  btnOne.style.display = "block";
  btnTwo.style.display = "block";
  btnThree.style.display = "block";
  btnFour.style.display = "block";
  for (let i = 0; i < questions.length; i++) {
    test.textContent = questions[1].question;
    btnOne.textContent = questions[1].options[0];
    btnTwo.textContent = questions[1].options[1];
    btnThree.textContent = questions[1].options[2];
    btnFour.textContent = questions[1].options[3];
  }

  const wrongOptions = [btnThree, btnTwo, btnFour];

  for (i = 0; i < wrongOptions.length; i++) {
    const currentOption = wrongOptions[i];
    currentOption.addEventListener("click", decrementTime);
  }

  btnOne.addEventListener(
    "click",
    function () {
      questionThree();
    },
    { once: true }
  );
}

function questionThree() {
  resetEventListeners();

  count++;
  countEl.textContent = `${count} correct answers out of 5!`;
  btnOne.style.display = "block";
  btnTwo.style.display = "block";
  btnThree.style.display = "block";
  btnFour.style.display = "block";
  for (let i = 0; i < questions.length; i++) {
    test.textContent = questions[2].question;
    btnOne.textContent = questions[2].options[0];
    btnTwo.textContent = questions[2].options[1];
    btnThree.textContent = questions[2].options[2];
    btnFour.textContent = questions[2].options[3];
  }

  const wrongOptions = [btnThree, btnTwo, btnOne];

  for (i = 0; i < wrongOptions.length; i++) {
    const currentOption = wrongOptions[i];
    currentOption.addEventListener("click", decrementTime);
  }

  btnFour.addEventListener(
    "click",
    function () {
      questionFour();
    },
    { once: true }
  );
}

function questionFour() {
  resetEventListeners();

  count++;
  countEl.textContent = `${count} correct answers out of 5!`;
  btnOne.style.display = "block";
  btnTwo.style.display = "block";
  btnThree.style.display = "block";
  btnFour.style.display = "block";
  for (let i = 0; i < questions.length; i++) {
    test.textContent = questions[3].question;
    btnOne.textContent = questions[3].options[0];
    btnTwo.textContent = questions[3].options[1];
    btnThree.textContent = questions[3].options[2];
    btnFour.textContent = questions[3].options[3];
  }

  const wrongOptions = [btnThree, btnOne, btnFour];

  for (i = 0; i < wrongOptions.length; i++) {
    const currentOption = wrongOptions[i];
    currentOption.addEventListener("click", decrementTime);
  }

  btnTwo.addEventListener(
    "click",
    function () {
      questionFive();
    },
    { once: true }
  );
}

function questionFive() {
  resetEventListeners();
  count++;
  countEl.textContent = `${count} correct answers out of 5!`;
  btnOne.style.display = "block";
  btnTwo.style.display = "block";
  btnThree.style.display = "block";
  btnFour.style.display = "block";
  for (let i = 0; i < questions.length; i++) {
    test.textContent = questions[4].question;
    btnOne.textContent = questions[4].options[0];
    btnTwo.textContent = questions[4].options[1];
    btnThree.textContent = questions[4].options[2];
    btnFour.textContent = questions[4].options[3];
  }

  const wrongOptions = [btnThree, btnTwo, btnFour];

  for (i = 0; i < wrongOptions.length; i++) {
    const currentOption = wrongOptions[i];
    currentOption.addEventListener("click", decrementTime);
  }

  btnOne.addEventListener(
    "click",
    function () {
      count++;
      countEl.textContent = count;
      localStorage.setItem("score", timeLeft);
      renderScore();
    },
    { once: true }
  );
}

function renderScore() {
  initials.style.display = "block";
  submit.style.display = "block";
  description.style.display = "block";
  btnOne.style.display = "none";
  btnTwo.style.display = "none";
  btnThree.style.display = "none";
  btnFour.style.display = "none";
  countEl.style.display = "none";
  test.textContent = "WOW! You finished!";
  description.textContent =
    "Enter your name to be etched into the hall of fame!";
  clearInterval(timeInterval);
}

submit.addEventListener("click", function (event) {
  event.preventDefault();
  button.style.display = "block";
  button.textContent = "Click Here To Play Again";
  description.style.display = "none";
  submit.style.display = "none";
  initials.style.display = "none";
  const highScoreInitial = initials.value;
  localStorage.setItem("initials", highScoreInitial);
  const yourScore = localStorage.getItem("score");
  test.textContent = `Congrats ${highScoreInitial}! Your score is ${yourScore}!`;
  renderLeaders();
});

function renderLeaders() {
  let leaderArr = [];
  let ol = document.getElementById("highList");
  let board = document.getElementById("board");
  let boardText = document.createElement("h2");
  board.textContent = "Here's the leaders so far!";
  board.style.textAlign = "center";
  board.style.fontFamily = "Roboto Mono";
  board.style.fontWeight = "bold";
  board.style.marginTop = "10%";
  board.appendChild(boardText);

  leaderArr.push(localStorage.getItem("initials"));
  leaderArr.push(localStorage.getItem("score"));
  for (let i = 0; i < leaderArr.length; i++) {
    var li = document.createElement("h2");
    li.style.fontWeight = "bold";
    li.style.fontFamily = "Roboto Mono";
    li.style.textAlign = "center";
    li.style.borderRadius = "25px";
    li.style.color = "white";
    ol.appendChild(li);
  }
  console.log(leaderArr);
  li.innerText = `${leaderArr[0]} has a score of ${leaderArr[1]}`;
}
