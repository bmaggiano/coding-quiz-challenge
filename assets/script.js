const questions = [{
    question: "Which one of the following is not a valid HTML tag?",
    options: ["div", "span", "req", "section"],
    answer: "req",
},
{
    question: "What is the standard direction of flex items unless otherwise specified?",
    options: ['row', 'column', 'diagonal', 'reverse'],
    answer: "row",
},
{
    question: "If you wanted to style an HTML class, which character would you use?",
    options: ['#', '$', '&', '.'],
    answer: ".",
},
{
    question: "When using comparisons, what does === describe?",
    options: ['Equal in type', 'Equal in type and value', 'Equal in value', 'Not equal at all'],
    answer: "Equal in type and value",
},
{
    question: "What does CSS stand for?",
    options: ['Cascading style sheet', 'Central server system', 'Client side syntax', 'Colorful style signal'],
    answer: 'Cascading style sheet',
}]

const countEl = document.getElementById('counter')
const button = document.getElementById('start')
const timerEl = document.getElementById('timer')
const testQuestion = document.getElementById('question')
const testUl = document.getElementById('choices')
let test = document.querySelector('h2');
const btnOne = document.getElementById("btn-one")
const btnTwo = document.getElementById("btn-two")
const btnThree = document.getElementById("btn-three")
const btnFour = document.getElementById("btn-four")
const description = document.getElementById('description')
const score = document.getElementById('score')
const submit = document.getElementById('submit')
const initials = document.getElementById('initials')
let count = 0;
let timeLeft = 60;


initials.style.display = 'none'
submit.style.display = 'none'
btnOne.style.display = 'none';
btnTwo.style.display = 'none';
btnThree.style.display = 'none';
btnFour.style.display = 'none';
timerEl.textContent = `You have ${timeLeft} seconds left... are you ready?!`;

function countdown() {    
  
  timerEl.textContent = `You have ${timeLeft} seconds left!`;
    timeInterval = setInterval(function () {
      timeLeft--;
      timerEl.textContent = `You have ${timeLeft} seconds left!`;
  
      if (timeLeft === 0) {
        clearInterval(timeInterval)
        timerEl.textContent = "Time's Up";
        //Something must go here
        displayMessage()
      };
    }, 1000);
  }

  button.addEventListener('click', function() {
    timeLeft = 60;
    button.style.display = 'none';
    description.style.display = 'none';
    countdown();
    questionOne();
    
  })

  function questionOne() {  
    countEl.textContent = count;
    btnOne.style.display = 'block';
    btnTwo.style.display = 'block';
    btnThree.style.display = 'block';
    btnFour.style.display = 'block';
        for (let i = 0; i < questions.length; i++) {
        // console.log(questions[i])
        test.textContent = questions[0].question;
        btnOne.textContent = questions[0].options[0];
        btnTwo.textContent = questions[0].options[1];
        btnThree.textContent = questions[0].options[2];
        btnFour.textContent = questions[0].options[3];
  }

  btnThree.addEventListener('click', function() {
    questionTwo();
  }, {once : true})
}

function questionTwo() {   
    count ++;
    countEl.textContent = count;
    // countEl.textContent = count; 
    btnOne.style.display = 'block';
    btnTwo.style.display = 'block';
    btnThree.style.display = 'block';
    btnFour.style.display = 'block';
        for (let i = 0; i < questions.length; i++) {
        // console.log(questions[i])
        test.textContent = questions[1].question;
        btnOne.textContent = questions[1].options[0];
        btnTwo.textContent = questions[1].options[1];
        btnThree.textContent = questions[1].options[2];
        btnFour.textContent = questions[1].options[3];
  }

  btnOne.addEventListener('click', function() {
    questionThree();
  }, {once : true})
}

function questionThree() { 
    count ++;
    countEl.textContent = count;  
    // countEl.textContent = count; 
    btnOne.style.display = 'block';
    btnTwo.style.display = 'block';
    btnThree.style.display = 'block';
    btnFour.style.display = 'block';
        for (let i = 0; i < questions.length; i++) {
        // console.log(questions[i])
        test.textContent = questions[2].question;
        btnOne.textContent = questions[2].options[0];
        btnTwo.textContent = questions[2].options[1];
        btnThree.textContent = questions[2].options[2];
        btnFour.textContent = questions[2].options[3];
  }

  btnFour.addEventListener('click', function() {
    questionFour();
  }, {once : true})
}

function questionFour() {
    count ++;
    countEl.textContent = count;    
    btnOne.style.display = 'block';
    btnTwo.style.display = 'block';
    btnThree.style.display = 'block';
    btnFour.style.display = 'block';
        for (let i = 0; i < questions.length; i++) {
        // console.log(questions[i])
        test.textContent = questions[3].question;
        btnOne.textContent = questions[3].options[0];
        btnTwo.textContent = questions[3].options[1];
        btnThree.textContent = questions[3].options[2];
        btnFour.textContent = questions[3].options[3];
  }

  btnTwo.addEventListener('click', function() {
    questionFive()
}, {once : true})
}

function questionFive() { 
    count ++;
    countEl.textContent = count;
    // countEl.textContent = count; 
    btnOne.style.display = 'block';
    btnTwo.style.display = 'block';
    btnThree.style.display = 'block';
    btnFour.style.display = 'block';
    for (let i = 0; i < questions.length; i++) {
        // console.log(questions[i])
        test.textContent = questions[4].question;
        btnOne.textContent = questions[4].options[0];
        btnTwo.textContent = questions[4].options[1];
        btnThree.textContent = questions[4].options[2];
        btnFour.textContent = questions[4].options[3];
    }
    
  btnOne.addEventListener('click', function() {
      count ++;
    countEl.textContent = count;
    // console.log(timeLeft)
    localStorage.setItem('score', timeLeft)
    renderScore()
  }, {once : true})
}



function renderScore() {
  initials.style.display = 'block'
  submit.style.display = 'block'
  description.style.display = 'block'
  // timerEl.style.display='none';
  btnOne.style.display = 'none';
  btnTwo.style.display = 'none';
  btnThree.style.display = 'none';
  btnFour.style.display = 'none';
  countEl.style.display = 'none'
  // document.getElementById('score').innerHTML = score;
  test.textContent = ('WOW! You finished!')
  description.textContent = ('Enter your name to be etched into the hall of fame!')
  clearInterval(timeInterval)
  }
  
  submit.addEventListener('click', function(event) {
    event.preventDefault();
    button.style.display = 'block'
    button.textContent = ('Click Here To Play Again')
    description.style.display = 'none'
    submit.style.display = 'none'
    initials.style.display = 'none'
    const highScoreInitial = initials.value
    localStorage.setItem('initials', highScoreInitial)
    // console.log(highScoreInitial)
    
    const yourScore = localStorage.getItem('score');
    test.textContent = (`Congrats ${highScoreInitial}! Your score is ${yourScore}!`)
    renderLeaders()
})

function renderLeaders() {
  let leaderArr = []
  let ol = document.getElementById('highList')
  let board = document.getElementById('board')
  let boardText = document.createElement('h2')
  board.textContent = ("Here's the leaders so far!")
  board.style.textAlign = "center"
  board.style.fontFamily = "sans-serif"
  board.style.fontWeight = "bold"
  board.style.marginTop = "10%"
  board.appendChild(boardText)



  leaderArr.push(localStorage.getItem('initials'))
  leaderArr.push(localStorage.getItem('score'))
  for (let i=0; i<leaderArr.length; i++) {
    var li = document.createElement('h2')
    li.style.fontWeight = "bold"
    li.style.fontFamily = "sans-serif"
    li.style.textAlign = "center"
    li.style.backgroundColor = "red"
    li.style.color = "white"
    ol.appendChild(li)
  }console.log(leaderArr)
  li.innerText = `${leaderArr[0]} has a score of ${leaderArr[1]}`;
}
