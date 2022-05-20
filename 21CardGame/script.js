
let player;
let computer;


const deckCards = {
    AceHearts: 1,
    TwoHearts: 2,
    KingHearts: 10,
    JackHearts: 10
}

//console.log(deckCards.AceHearts);


function getRandomCard(obj) {
    const keys = Object.keys(obj); 
    return keys[Math.floor(Math.random() * keys.length)];
  }


  
//console.log(getRandomCard(deckCards));
