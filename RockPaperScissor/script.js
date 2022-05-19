

const paper = 'paper';
const scissors = 'scissors';
const rock = 'rock';

const computerOptions = [paper, scissors, rock];
let computerchoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];

let player;
let computer;

const playerOptionPaper = (event) => {
    player = paper;
}
const playerOptionScissors = (event) => {
    player = scissors;
}
const playerOptionRock = (event) => {
    player = rock;
}
const computerPlayButton = (event) => {
    computer = computerchoice;
    let message = playGame(player, computer);
    // console.log('computer selected ' + computer);
    // console.log(message);
    const elementMessage = document.getElementById('message');
    const elementParagraph = document.createElement('p');
    elementParagraph.innerText = message;
    elementMessage.appendChild(elementParagraph)
}

const elementPaper = document.getElementById('paper');
const elementScissors = document.getElementById('scissors');
const elementRock = document.getElementById('rock');
const elementPlayButton = document.getElementById('playbutton');


elementPaper.addEventListener('click', playerOptionPaper);
elementScissors.addEventListener('click', playerOptionScissors);
elementRock.addEventListener('click', playerOptionRock);
elementPlayButton.addEventListener('click', computerPlayButton);

const playGame = (player, computer) => {
    if (player === paper) {
        if (computer === paper) {
            //console.log('its a draw! nobody won.');
            return 'computer selected ' + computerchoice +', its a draw! nobody won.';
        }
        if (computer === scissors) {
           // console.log('computer won! you lose!');
            return 'computer selected ' + computerchoice +', computer won! you lose!';
        }
        if (computer === rock) {
            //console.log('you won!!');
            return 'computer selected ' + computerchoice +', you won!!';
        }
    }
    if (player === scissors) {
        if (computer === paper) {
            //console.log('you won!!');
            return 'computer selected ' + computerchoice +', you won!!';
        }
        if (computer === scissors) {
            //console.log('its a draw! nobody won.');
            return 'computer selected ' + computerchoice +', its a draw! nobody won.';
        }
        if (computer === rock) {
            //console.log('computer won! you lose!');
            return 'computer selected ' + computerchoice +', computer won! you lose!';
        }
    }
    if (player === rock) {
        if (computer === paper) {
            //console.log('computer won! you lose!');
            return 'computer selected ' + computerchoice +', computer won! you lose!';
        }
        if (computer === scissors) {
            //console.log('you won!!');
            return 'computer selected ' + computerchoice +', you won!!';
        }
        if (computer === rock) {
           //console.log('its a draw! nobody won.');
            return 'computer selected ' + computerchoice +', its a draw! nobody won.';
        }
    }

    

}


