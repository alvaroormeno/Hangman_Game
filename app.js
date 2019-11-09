
// DEFINE ALL VARIABLES IN HTML - WINS , LOOSES, GUESS REMAINS, WORDS GUESSED

var numberOfWins = 0;

var winCountElem = document.querySelector("#winCount")
winCountElem.innerHTML = numberOfWins;

let numberOfLoses = 0;
document.getElementById('lossCount').innerHTML = numberOfLoses;

let remainingGuesses = 8;
document.getElementById('guessesRemaining').innerHTML = remainingGuesses;

let guessedLetters = '';
document.getElementById('guessedLetters').innerHTML = ('letters: ' + guessedLetters);




// COMPUTER ALPHABET CHOICES

let possibleComputerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 
'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    // COMPUTER CHOOSES RANDOM LETTER FROM ALPHABET CHOICES
    var computerChoice = generateNewChoice();
    function generateNewChoice() {
        let randomLetter = Math.floor(Math.random() * possibleComputerChoices.length);
        computerChoice = possibleComputerChoices[randomLetter];
        console.log (computerChoice);
        return computerChoice;
    }
    
    


// USER CHOOSES A LETTER - ADD LISTENER FOR KEY INPUT 

document.onkeydown = function(event) {

    let userChoice = event.key;
    console.log(userChoice);
    
    
    

    // BOTH CHOICES ARE COMPARED
    // IF LOOSES STATEMENT : if remainingGuesses = 0 do this
    if (remainingGuesses === 0) {
        // logs in console you lost
        console.log("YOU LOST! :(")
        //documents on innerHTML of elemebt with ID lossCount = numberOFloses
        numberOfLoses = numberOfLoses + 1;
        document.getElementById('lossCount').innerHTML = numberOfLoses;
        remainingGuesses = 8;
        document.getElementById('guessesRemaining').innerHTML = remainingGuesses;
        generateNewChoice();
        guessedLetters = ' '
        document.getElementById('guessedLetters').innerHTML = 'letters: '

       

        
    } else if (computerChoice === userChoice) {
        console.log('you won!');
        numberOfWins ++;
        winCountElem.innerHTML = numberOfWins;
        guessedLetters = ' '
        document.getElementById('guessedLetters').innerHTML = 'letters: '
        

        


    }  else if (computerChoice !== userChoice) {
        console.log("guess again!")
        remainingGuesses --;
        document.getElementById('guessesRemaining').innerHTML = remainingGuesses;
        guessedLetters = guessedLetters + ' ' + userChoice;
        document.getElementById('guessedLetters').innerHTML = ('letters: ' + guessedLetters);
    
        

    }
    
}













/* If statement : if both choices match do this, else do that. */


    // document on innerhtml of element with ID of winCount = add +1 to wincount 
   // winCountElem.innerHTML = winCount + 1;








 





// RESULTS