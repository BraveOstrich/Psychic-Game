// Random letter generator
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var options = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// Count wins & losses
    var wins = 0;
    var losses = 0;

// Number of guesses left
    var guessLeft = 9;
// Letters guessed
    var lettersGuessed = [];

// Variables to html document
    var winsText = document.getElementById("wins-text").innerHTML;
    var lossesText = document.getElementById("losses-text").innerHTML;
    var guessesLeft = document.getElementById("guesses-left");
    var guessedLetters = document.getElementById("your-guesses");



// Randomly selects a letter from the letter array
    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

// Function ran when user selects a letter
    document.onkeyup = function(event) {
// Determines which letter was pressed
        var userGuess = event.key;

    if (userGuess === computerChoice){
        wins ++;
        guessedLetters = [];
    } 
    if (userGuess !== computerChoice){
        guessLeft --;
    }
    if (guessLeft === 0){
        losses ++;
        guessedLetters = [];
    }


    guessedLetters.textContent += " " + userGuess + ",";
    winsText.textContent += wins;
    lossesText.textContent += lossesText;
    guessesLeft.textContent += guessLeft;
};