// get the elemnts we need

const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
const playerLives = 6;

//link lives counter to span

playerLivesCount.textContent = playerLives;

//Generate game content via array of objects

const cardData = () => [
{ imgSrc:'./pics/apple.jpg', name:'apple' },
{ imgSrc:'./pics/banana.jpg', name:'banana' },
{ imgSrc:'./pics/cherry.jpg', name:'cherry' },
{ imgSrc:'./pics/fig.jpg', name:'fig' },
{ imgSrc:'./pics/grappe.jpg', name:'grappe' },
{ imgSrc:'./pics/mango.jpg', name:'mango' },
{ imgSrc:'./pics/orange.jpg', name:'orange' },
{ imgSrc:'./pics/peach.jpg', name:'peach' },
{ imgSrc:'./pics/apple.jpg', name:'apple' },
{ imgSrc:'./pics/banana.jpg', name:'banana' },
{ imgSrc:'./pics/cherry.jpg', name:'cherry' },
{ imgSrc:'./pics/fig.jpg', name:'fig' },
{ imgSrc:'./pics/grappe.jpg', name:'grappe' },
{ imgSrc:'./pics/mango.jpg', name:'mango' },
{ imgSrc:'./pics/orange.jpg', name:'orange' },
{ imgSrc:'./pics/peach.jpg', name:'peach' },
// { imgSrc:'./pics/pear.jpg', name:'pear' },
// { imgSrc:'./pics/strawberry.jpg', name:'strawberry' },
// { imgSrc:'./pics/watermelon.jpg', name:'watermelon' },
// { imgSrc:'./pics/avocado.jpg', name:'avocado' },
// { imgSrc:'./pics/berrys.jpg', name:'berrys' },
// { imgSrc:'./pics/blueberry.jpg', name:'blueberry' },
// { imgSrc:'./pics/melon.jpg', name:'melon' },
// { imgSrc:'./pics/passionfruit.jpg', name:'passion fruit' },
]

const randomizeCards = () => {
    const getCardData = cardData();
    getCardData.sort( () => Math.random() -0.5);
    return getCardData;

    // console.log(getCardData);
};

const cardGenerator = () => {
    const cardData = randomizeCards();
    
    // creat HTML elements for cards via forEach loop
    cardData.forEach((item) => {
        //console.log(item);
        
        const card = document.createElement('div');
        const cardFace = document.createElement('img');
        const cardBack = document.createElement('div');
        card.classList = 'card';
        cardFace.classList = 'face';
        cardBack.classList = 'back';
        //attach images and name to the cards
        cardFace.src = item.imgSrc;
        card.setAttribute('name', item.name);
        //attach cards to section in HTML
        section.appendChild(card);
        card.appendChild(cardFace);
        card.appendChild(cardBack);

        card.addEventListener('click', (e) => {
            card.classList.toggle('toggleCard');
            checkCards(e);
        })
    });
};

const checkCards = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add('flipped')
    const flippedCards = document.querySelectorAll('.flipped')
    console.log(flippedCards);

    // compare cards with if statement
    if (flippedCards.length === 2) {
        
        if (
            flippedCards[0].getAttribute('name') === 
            flippedCards[1].getAttribute('name') 
         ) {
            console.log('match');
        } else {
            console.log('wrong')
        }
    }
};

cardGenerator();