let dealerSum = 0;
let yourSum = 0;

let dealerAceCount = 0;
let yourAceCount = 0;

let hidden;
let deck;

// to allow the player to draw more cards while the sum is bellow 21 
let canHit = true;

window.onload = function () {
    buildDeck();
    shuffleDeck();
    startGame();
}

// 2 arrays to build the card deck - one with the numbers "values", another for the types
function buildDeck() {
    let types = ["S", "H", "D", "C"];
    let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    deck = [];

    //placing cards together matching types and number
    for (let i = 0; i < types.length; i++) {
        for (let x = 0; x < values.length; x++) {
            deck.push(values[x] + "-" + types[i]);
        }
    }
    //console.log (deck);
}

function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    // console.log(deck); 
}

const startGame = () => {
    hidden = deck.pop();
    console.log("show first= " + dealerSum)
    dealerSum += getValue(hidden);
    dealerAceCount += checkAce(hidden);

    // console.log("show hidden card inside starGame= " + hidden);
    // console.log("dealer sum inside startGame= " + dealerSum);

    while (dealerSum < 17) { //appending cards to the dealer untill it sums 17 or more
        //gets the card image and creates the HTML <img> for it
        let cardImg = document.createElement("img");
        let card = deck.pop();
        cardImg.src = "pics/" + card + ".png";
        dealerSum += getValue(card);  //incremented the sum to add more cards
        dealerAceCount += checkAce(card); //incrementing
        document.getElementById("dealerCards").append(cardImg);
    }
    console.log("dealer sum inside while= " + dealerSum);
    // procedure but now for the player
    for (let i = 0; i < 2; i++) {
        let cardImg = document.createElement("img");
        let card = deck.pop();
        cardImg.src = "pics/" + card + ".png";
        yourSum += getValue(card);
        yourAceCount += checkAce(card);
        document.getElementById("yourCards").append(cardImg);

    }
    console.log("player cards sum= " + yourSum);
    document.getElementById("hit").addEventListener("click", hit);
    document.getElementById("stay").addEventListener("click", stay);


}

//function to add more cards linked with the event listener to the button hit
const hit = () => {
    if (!canHit) {
        return;
    }// adding more cards
    let cardImg = document.createElement("img");
    let card = deck.pop();
    cardImg.src = "pics/" + card + ".png";
    yourSum += getValue(card);
    yourAceCount += checkAce(card);
    document.getElementById("yourCards").append(cardImg);
    //limiting the number of card/count to less than 21
    // and controling the value choice of the "A" switching it between 1 and 11 to keep it lower than 21
    if (reduceAce(yourSum, yourAceCount) > 21) {
        canHit = false
    }

}

const getValue = (card) => {
    let data = card.split("-"); // by calling the function split on the dash simbol "-" we are creating an array with values and types separate like this : 4-C" -> ["4", "C"]
    let value = data[0];
    console.log("show the value= " + value)
    //if the values does not contain digits then its "true" and give back 11 if it does contain digits then it gives back 10
    if (isNaN(value)) { //A J Q K // the function isNaN is a js predefined
        if (value == "A") {
            return 11;
        }
        return 10;
    }
    return parseInt(value);
}

const checkAce = (card) => {
    if (card[0] == "A") {
        return 1;
    }
    return 0;
}

//controling the value choice of the "A" switching it between 1 and 11 to keep it lower than 21
const reduceAce = (playerSum, playerAceCount) => {
    while (playerSum > 21 && playerAceCount > 0) {
        playerSum -= 10;
        playerAceCount -= 1;
    }
    return playerSum;
}

//function for button "stay"- both players keep there cards, button for hit is disabled and hidden cards is revelead

const stay = () => {
    dealerSum = reduceAce(dealerSum, dealerAceCount);
    yourSum = reduceAce(yourSum, yourAceCount);
    canHit = false;
    document.getElementById("hidden").src = "pics/" + hidden + ".png";

    let message = "";
    if (yourSum > 21) {
        message = "You Lose!";
    }
    else if (dealerSum > 21) {
        message = "You win!"
    }
    //both you and the dealer is tied
    else if (yourSum == dealerSum) {
        message = "It's a tie";
    }
    else if (yourSum > dealerSum) {
        message = "You win";
    }
    else if (yourSum < dealerSum) {
        message = "You Lose!";
    };

    document.getElementById("dealerSum").innerText = dealerSum;
    document.getElementById("yourSum").innerText = yourSum;
    document.getElementById("results").innerText = message;

    if (document.getElementById("playAgain") === null) {
        let buttonsContainer = document.getElementById("buttonsContainer");
        let btnPlayAgain = document.createElement("button");
        btnPlayAgain.id = "playAgain"
        btnPlayAgain.innerText = "Play Again";
        buttonsContainer.append(btnPlayAgain);
        document.getElementById("playAgain").addEventListener("click", clickPlayAgain);
    }
}

const clickPlayAgain = () => {
    console.log("test click playAgain")
    location.reload();
}