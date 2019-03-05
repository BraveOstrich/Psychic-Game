// Random letter generator
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Count wins & losses
    var wins = 0;
    var losses = 0;

// Number of guesses left
    var guessLeft = 9;
// Letters guessed
    var lettersGuessed = [];

// Variables to html document
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesLeft = document.getElementById("guesses-left");
    var guessedLetters = document.getElementById("your-guesses");



// Randomly selects a letter from the letter array
    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

// Function ran when user selects a letter
    document.onkeyup = function(event) {
// Determines which letter was pressed
    var userGuess = event.key;

    
    // for (var i = 1; i < guessLeft; i++){
    //     //guessedLetters = [];
    //     console.log(computerChoice);
    // }
    if (userGuess === computerChoice){
        wins++;
        lettersGuessed = [];
    } else {
        guessLeft--;

        if(guessLeft <= 0){
            losses++;
            guessLeft = 9;
            lettersGuessed = [];
            computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        }
        else{
            lettersGuessed.push(userGuess);
        }
        
    } 


    guessedLetters.textContent = "Your guesses so far: " + lettersGuessed;
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeft.textContent = "Guesses left: " + guessLeft;

};