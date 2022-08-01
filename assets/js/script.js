// logic part

var currentQcount = 0;
var time = questions.length * 15;
var clockId;

// variables to reference DOM elements
var qsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var answersEl = document.getElementById("choices");
var finishBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var commentsEl = document.getElementById("feedback");

// user clicks button to start quiz
startBtn.onclick = beginQuiz;





function beginQuiz() {
  // hide start screen
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");

  qsEl.removeAttribute("class");

initialsEl.onkeyup = checkForEnter;
var startScreenEl = document.getElementById("questions");
  startScreenEl.setAttribute("class", "unhide");
getQ()


function getQ() {
  

// list of all questions, choices, and answers
var questions = [
  {
    title: "What CSS declaration could you add to a 50%-width <div> to center it?",

    
    choices: ["text-align: center","margin: 0 auto","float: center","align: center"],
    
    answer: "margin: 0 auto",
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above"
    ],
    answer: "all of the above"
  },
  {
    title:      "A short sections of code written to complete a task is?", 
    choices: ["Buffer","Function","Loop","Array"],
    answer: "Function"
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log"
  }

];
// get current question object from array
var currentQ = questions[currentQcount];

  // update title with current question
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQ.title;

  // loop over choices
currentQ.choices.forEach(function(choice, i) {
  
  // create new button for each choice
  var choiceNode = document.createElement("button");
  choiceNode.setAttribute("class", "choices");
  choiceNode.setAttribute("value", choices);


  choiceNode.textContent = i + 1 + ". " + choice;
}




  // start timer
  timerId = setInterval(clockTick, 1000);

  // show starting time
  timerEl.textContent = time;






  

  

    // attach click event listener to each choice
    choiceNode.onclick = questionClick;

    // display on the page
    choicesEl.appendChild(choiceNode);
  });
}
// clear out any old question choices
choicesEl.innerHTML = "";
}
function QClick() {
  // check if user guessed wrong
  if (this.value !== questions[currentQcount].answer) {
    // penalize time
    time -= 18;

    if (time < 0) {
      time = 0;
    }

    // display new time on page
    timerEl.textContent = time;

    // play "wrong" sound effect
    sfxWrong.play();

    feedbackEl.textContent = "incorrect!";
  } else {
    // play "right" sound effect
    sfxRight.play();

    feedbackEl.textContent = "Correct!";
  }

  // flash right/wrong feedback on page for half a second
  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function() {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 1000);

  // move to next question
  currentQcount++;

  // check if we've run out of questions
  if (currentQcount === q.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}


function quizEnd() {
  // stop timer
  clearInterval(timerId);

  // show end screen
  var endScreenEl = document.getElementById("end-screen");
  endScreenEl.removeAttribute("class");

  // show final score
  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = time;

  // hide questions section
  qsEl.setAttribute("class", "hide");
}
function clockTick() {
  // update time
  time--;
  timerEl.textContent = time;


  // check if user ran out of time
  if (time <= 0) {
    quizEnd();
  }
}


function checkForEnter(event) {
  // "13" represents the enter key
  if (event.key === "Enter") {
    saveHighscore();
  }

function saveHighscore() {
  // get value of input box
  var initials = initialsEl.value.trim();

  // make sure value wasn't empty
  if (initials !== "") {
    // get saved scores from localstorage, or if not any, set to empty array
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];

    // format new score object for current user
    var newScore = {
      score: time,
      initials: initials
    };

    // save to localstorage
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

   // user clicks button to submit initials
finishBtn.onclick = saveHighscore;
  }
}
}


