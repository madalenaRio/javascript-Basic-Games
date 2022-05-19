
let playCicle = true;
let player;
let computer;

const paper = 'paper';
const scissors = 'scissors';
const rock = 'rock';

const computerOptions = [paper, scissors, rock];
let computerchoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];


const computerPlayButton = () => {
    computer = computerchoice;
    let message = playGame(player, computer);
    const elementMessage = document.getElementById('message');
    const elementParagraph = document.createElement('p');
    elementParagraph.innerText = message;
    elementMessage.appendChild(elementParagraph);
}

const PlayAgainButton = () => {
    window.location.reload();
}
const playerOptionPaper = () => {
        player = paper;
        const elemPlayerChoiceMessage = document.getElementById('playerChoiceMessage');
        const elemPlayerChoiceMessageParg = document.createElement('p');
        elemPlayerChoiceMessageParg.innerText = 'You chose paper';
        elemPlayerChoiceMessage.appendChild(elemPlayerChoiceMessageParg);
        const blockButtonScissors = document.getElementById('scissors');
        blockButtonScissors.disabled = true;
        const blockButtonRock = document.getElementById('rock');
        blockButtonRock.disabled = true;
        console.log('test1');
    }
const playerOptionScissors = () => {
        player = scissors;
        const elemPlayerChoiceMessage = document.getElementById('playerChoiceMessage');
        const elemPlayerChoiceMessageParg = document.createElement('p');
        elemPlayerChoiceMessageParg.innerText = 'You chose scissors';
        elemPlayerChoiceMessage.appendChild(elemPlayerChoiceMessageParg);
        const blockButtonPaper = document.getElementById('paper');
        blockButtonPaper.disabled = true;
        const blockButtonRock = document.getElementById('rock');
        blockButtonRock.disabled = true;
        console.log('test2');
       
}
const playerOptionRock = () => {
        player = rock;
        const elemPlayerChoiceMessage = document.getElementById('playerChoiceMessage');
        const elemPlayerChoiceMessageParg = document.createElement('p');
        elemPlayerChoiceMessageParg.innerText = 'You chose rock';
        elemPlayerChoiceMessage.appendChild(elemPlayerChoiceMessageParg);
        const blockButtonPaper = document.getElementById('scissors');
        blockButtonPaper.disabled = true;
        const blockButtonRock = document.getElementById('paper');
        blockButtonRock.disabled = true;
        console.log('test3');      
}

const elementPaper = document.getElementById('paper');
const elementScissors = document.getElementById('scissors');
const elementRock = document.getElementById('rock');
const elementPlayButton = document.getElementById('playbutton');
const elementPlayAgainButton = document.getElementById('playagainbutton');

elementPaper.addEventListener('click', playerOptionPaper);
elementScissors.addEventListener('click', playerOptionScissors);
elementRock.addEventListener('click', playerOptionRock);
elementPlayButton.addEventListener('click', computerPlayButton);
elementPlayAgainButton.addEventListener('click', PlayAgainButton);


const playGame = (player, computer) => {

        if (computer === paper) {
            document.getElementById('scissors')
            scissors.disabled = true;
            document.getElementById('rock')
            rock.disabled = true;
        }
        if (player === scissors) {
            document.getElementById('paper')
            paper.disabled = true;
            document.getElementById('rock')
            rock.disabled = true;
        }
        if (computer === rock) {
            document.getElementById('paper')
            paper.disabled = true;
            document.getElementById('scissors')
            scissors.disabled = true;
        }
        if (player === paper) {
            if (computer === paper) {
                return 'computer selected ' + computerchoice + ', its a draw! nobody won.';
            }
            if (computer === scissors) {
                return 'computer selected ' + computerchoice + ', computer won! you lose!';
            }
            if (computer === rock) {
                return 'computer selected ' + computerchoice + ', you won!!';
            }
        }
        if (player === scissors) {
            if (computer === paper) {
                return 'computer selected ' + computerchoice + ', you won!!';
            }
            if (computer === scissors) {
                return 'computer selected ' + computerchoice + ', its a draw! nobody won.';
            }
            if (computer === rock) {
                return 'computer selected ' + computerchoice + ', computer won! you lose!';
            }
        }
        if (player === rock) {
            if (computer === paper) {
                return 'computer selected ' + computerchoice + ', computer won! you lose!';
            }
            if (computer === scissors) {
                return 'computer selected ' + computerchoice + ', you won!!';
            }
            if (computer === rock) {
                return 'computer selected ' + computerchoice + ', its a draw! nobody won.';
            }
        }

}





