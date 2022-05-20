// set variable for players
// let player;
// let computer;

// create deck of cards
var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
    var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    var deck = new Array();

    function DeckOfCards()
    {
        deck = new Array();
        for (var i = 0 ; i < values.length; i++)
        {
            for(var x = 0; x < suits.length; x++)
            {
                var weight = parseInt(values[i]);
                if (values[i] == "J" || values[i] == "Q" || values[i] == "K")
                    weight = 10;
                if (values[i] == "A")
                    weight = 1;
                var card = { Value: values[i], Suit: suits[x], Weight: weight };
                deck.push(card);
            }
        }
    }

// shuffle the deck

function shuffleDeck()
    {
        // for 1000 turns
        // switch the values of two random cards
        for (var i = 0; i < 1000; i++)
        {
            var location1 = Math.floor((Math.random() * deck.length));
            var location2 = Math.floor((Math.random() * deck.length));
            var tmp = deck[location1];

            deck[location1] = deck[location2];
            deck[location2] = tmp;
        }
    }
// add the players




//---------first draft ----------

// const deckCards = {
//     AceHearts: 1,
//     TwoHearts: 2,
//     TreeHearts: 3,
//     FourHearts: 4,
//     FiveHearts: 5,
//     KingHearts: 10,
//     JackHearts: 10
// }


// function getRandomCard(obj) {
//     const keys = Object.keys(obj); 
//     return keys[Math.floor(Math.random() * keys.length)];
//   }

