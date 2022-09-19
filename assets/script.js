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
const button = document.querySelector('button')
const timerEl = document.getElementById('timer')
const testQuestion = document.getElementById('question')
const testUl = document.getElementById('choices')
let test = document.querySelector('h2');


let timeLeft = 60;


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
    countdown();
    for (let i = 0; i < questions.length; i++) {
        console.log(questions[i])
        test.textContent = questions[0].question;
        testUl.textContent = questions[0].options;

}
  })

  function quiz() {
    
  }


  function displayMessage() {

  }