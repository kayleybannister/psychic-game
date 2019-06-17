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
document.onkeyup = function(event) {

    console.log("You are now in the main function");

    userText.textContent = event.key; 

    var computerGuess = letters[Math.floor(Math.random() * letters.length)];

    if (userText === computerGuess) {
            wins++;
        }
        
        else {
          losses++;
          guessesLeft--;
        }

    winNumber.textContent = "WINS: " + wins;
    lossNumber.textContent = "LOSSES: " + losses;
    computerChoice.textContent = computerGuess;
}


// create a for loop that decrements the guesses remaining by 1 every time the user selects a letter
// that did not match the computer's guess
// for (var i = 9; i < guessesLeft; i--) { guessesRemaining; }