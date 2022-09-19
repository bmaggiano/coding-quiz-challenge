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
    options: ['#', '$', '.', '&'],
    answer: ".",
},
{
    question: "When using comparisons, what does === describe?",
    options: ['Equal in type', 'Equal in value', 'Equal in type and value', 'Not equal at all'],
    answer: "Equal in type and value",
},]
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


let timeLeft = 60;
btnOne.style.display = 'none';
btnTwo.style.display = 'none';
btnThree.style.display = 'none';
btnFour.style.display = 'none';

function countdown() {    
    timerEl.textContent = `You have ${timeLeft} seconds left!`;

    var timeInterval = setInterval(function () {
      timeLeft--;
      timerEl.textContent = `You have ${timeLeft} seconds left!`;
  
      if (timeLeft === 0) {
        clearInterval(timeInterval)
        timerEl.textContent = "Time's Up";
        displayMessage()
      }
    }, 1000);
  }

  button.addEventListener('click', function() {
    button.style.display = 'none';
    description.style.display = 'none';
    countdown();
    questionOne();
    
  })

  function questionOne() {    
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
  })
}

function questionTwo() {    
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
  })
}

function questionThree() {    
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
  btnThree.addEventListener('click', function() {
    questionFour();
  })
}

function questionFour() {    
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
  btnThree.addEventListener('click', function() {
    alert("Congratulations")
  })
}



  function displayMessage() {

  }