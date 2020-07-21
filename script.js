
//variables for ID tags in the HTML
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var timerBTN = document.getElementById("timerButton");
var nextBTN = document.getElementById("nextBtn");
var startBTN = document.getElementById("startBtn");
var results = document.getElementById("result");
var submitBTN = document.getElementById("submitName");
var myTextArea = document.getElementById("myTextArea")

//variables for quiz questions
var quizQuestions = [
  {
    question: "How do you round a number to the nearest integer?",
    option1: "Math.round();",
    option2: "Math.floor();",
    option3: "Math.ceil();",
    option4: "Math.rnd();",
    answer: "1"
  },
  {
    question: "The external JavaScript must contain the < script > tag.",
    option1: "True",
    option2: "False",
    option3: " ",
    option4: " ",
    answer: "2"
  },
  {
    question: "What does Hyper Text Markup stand for?",
    option1: "JavaSctipt",
    option2: "CSS",
    option3: "HTML",
    option4: "jQuery",
    answer: "3"
  },
  {
    question: "How do you write 'Hello' in an alert box?",
    option1: "alertbx('Hello');",
    option2: "('Hello').alert;",
    option3: "alert.hello;",
    option4: "alert('Hello');",
    answer: "4"
  },
  {
    question: "Is JavaScript case sensitive?",
    option1: "True",
    option2: "False",
    option3: " ",
    option4: " ",
    answer: "1"
  },
  {
    question: "What is an example of a self closing tag?",
    option1: "< p >",
    option2: "< br >",
    option3: "< section > ",
    option4: "< button > ",
    answer: "2"
  }
];

//variables for score, question length, and timer countdown.
var score = "";//keeps track of user score
var questionCount = 0;//keeps track of which question
var totalQuestion = quizQuestions.length;
var countDown = 60;

timerBTN.addEventListener("click", startQuiz);

// function for startquiz, which starts the timer
function startQuiz() {
  questionCount = 0;

  var myTimer = setInterval(myTimer, 1000);

//local function of startQuiz for the timer
  function myTimer() {
    document.getElementById("timer").innerHTML = --countDown;
    if (countDown == 0) {
      countDown--;
      clearInterval(myTimer, 0);
      alert("Time's up, quiz over!");
      nextBTN.textContent = "Finish";
      quizFinish();
      
    }
  }
}

//loads the next question in the object
function loadQuestion(i) {
  var q = quizQuestions[i];
  var qEL = document.getElementById("questionEL");
  qEL.innerHTML = q.question;
  opt1.innerHTML = q.option1;
  opt2.innerHTML = q.option2;
  opt3.innerHTML = q.option3;
  opt4.innerHTML = q.option4;
};

//Next Question Button, loading the next question, and adding points to the score
function nextQuestion() {
  var radioButton = document.querySelector("input[type=radio]:checked");
  if (!radioButton && !(questionCount >= totalQuestion)) {
    alert("Please pick an answer");
  }
  var answer = radioButton.value;
  if (quizQuestions[questionCount].answer == answer) {
    score++
    alert("Your score is " + score * 10);
  } else {
    countDown = countDown - 10;
  }
  radioButton.checked = false;
  questionCount++;
  if (questionCount >= totalQuestion) {
    console.log(score * 10);
    quizFinish();
  }
  loadQuestion(questionCount);
}
loadQuestion(questionCount);

/*function to finish the quiz and hide all of the HTML ontainer elements and show all of the results elements.*/
function quizFinish() {
  document.getElementById("questionContainer").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("theH3").style.display = "block";
  document.getElementById("theH4").style.display = "block";
  document.getElementById("resultsText").style.display = "block";
  document.getElementById("myTextArea").style.display = "block";
  document.getElementById("submitName").style.display = "block";
  submitBTN.addEventListener("click", submitInfo);
}

//Function to store user name input and local storage
function submitInfo(){
  results.append(myTextArea.value);
  linebreak = document.createElement("br");
  results.append(linebreak);
  localStorage.setItem(score, myTextArea.value);

}