//creating variables for wins, losses, guesses left, and what guesses the user has already made
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];


//creating array for the letters that the computer can choose from
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
  "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
  "W", "X", "Y", "Z"];


//create variables that will hold the choices on the index html file on the div id's
//not really sure how this works but will try

// this links to the letters guessed in the index file
var userText = document.getElementById("user-text");
var computerChoice = document.getElementById("computer-choice");
var winNumber = document.getElementById("wins");
var lossNumber = document.getElementById("losses");
var guessesRemaining = document.getElementById("guesses-left");

//create an event so that the function is called to start the game
//the below calls the function whenever a key that was pressed is released
document.onkeyup = function (event) {

  if (event.keyCode > 59 && event.keyCode < 91) {

  if (guessesLeft) {

    console.log("You are now in the main function");

    userText.append(event.key + ",");

    var computerGuess = letters[Math.floor(Math.random() * letters.length)];

    if (userText == computerGuess) {
      wins++;
    } 
    else {
      losses++;
      guessesLeft--;
    };

    if (!guessesLeft) {
      guessesRemaining.textContent = "Guesses Left: " + guessesLeft;
      alert("You have lost!");
    };
    winNumber.textContent = "WINS: " + wins;
    lossNumber.textContent = "LOSSES: " + losses;
    computerChoice.textContent = computerGuess;
    guessesRemaining.textContent = "Guesses Left: " + guessesLeft;
  };
};
};