//generating a random number
let randomNumber = Math.floor(Math.random() * 17) + 1;
//constants for storing numbers so we can insert them in the "<div>paragraphs" on the HTML tree
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
//constants for storing the input guesses and submit button actions
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
// variables to store the number of times a user can play
let guessCount = 1;
let resetButton;


function checkGuess() {
    const userGuess = Number(guessField.value); //fetches the guess number
    if (guessCount === 1) { // if condition to verify if its the player first guess
      guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' '; // appending the guess to previous ones + the empty brackets is to add a blank space between each guess number shown.
  
    if (userGuess === randomNumber) { // if the guess number is equal to the random generated one the player wins!
      lastResult.textContent = 'Congratulations! You got it right!';
      lastResult.style.backgroundColor = 'green';
      lowOrHi.textContent = '';
      setGameOver();
    } else if (guessCount === 3) { // else it will check if the user has reached its last turn
      lastResult.textContent = '!!!GAME OVER!!!';
      lowOrHi.textContent = '';
      setGameOver();
    } else { // or else it will check if player has more guesses left
      lastResult.textContent = 'Wrong!';
      lastResult.style.backgroundColor = 'red';
      if(userGuess < randomNumber) {
        lowOrHi.textContent = 'Last guess was too low!';
      } else if(userGuess > randomNumber) {
        lowOrHi.textContent = 'Last guess was too high!';
      }
    }
    // sets the game ready for the player next guess attempt
    guessCount++; // to increment another turn by 1
    guessField.value = ''; // to empty the value form field
    guessField.focus(); //
    }

//now we need to call the function with an event listener set to react when the guess button is clicked 

guessSubmit.addEventListener('click', checkGuess);

//now we must set a game over function to complete the "game cicle"

function setGameOver() {
    //to stop user from adding more gueses after its turn is over
    guessField.disabled = true; 
    guessSubmit.disabled = true; 
    //creats a new button and adds it to the HTML in order to allow user to begin a new game
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.append(resetButton);
    //sets an event listener on our new button so when its clicked a new function resetGame()runs
    resetButton.addEventListener('click', resetGame);
  }

//now we add the reset game cicle:
//This rather long block of code completely resets everything to how it was at the start of the game, so the player can have another go.

  function resetGame() {
    //sets the gues count back to 1
    guessCount = 1;

    //Empties all the text out of the information paragraphs.
    const resetParas = document.querySelectorAll('.resultParas p');
    for (const resetPara of resetParas) {
      resetPara.textContent = '';
    }

    //Removes the reset button from our code.
    resetButton.parentNode.removeChild(resetButton);

    //Enables the form elements, and empties and focuses the text field, ready for a new guess to be entered.
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
  
    //Removes the background color from the lastResult paragraph.
    lastResult.style.backgroundColor = 'white';

    //Generates a new random number so that you are not just guessing the same number again!
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }

// toturial followed : https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash