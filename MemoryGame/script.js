// get the elemnts we need

const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
const playerLives = 6;

//link lives counter to span

playerLivesCount.textContent = playerLives;

//Generate game content via array of objects

const getData = () => [
{ imgSrc:'./pics/apple.jpg', name:'apple' },
{ imgSrc:'./pics/banana.jpg', name:'banana' },
{ imgSrc:'./pics/cherry.jpg', name:'cherry' },
{ imgSrc:'./pics/fig.jpg', name:'fig' },
{ imgSrc:'./pics/grappe.jpg', name:'grappe' },
{ imgSrc:'./pics/mango.jpg', name:'mango' },
{ imgSrc:'./pics/orange.jpg', name:'orange' },
{ imgSrc:'./pics/peach.jpg', name:'peach' },
{ imgSrc:'./pics/pear.jpg', name:'pear' },
{ imgSrc:'./pics/strawberry.jpg', name:'strawberry' },
{ imgSrc:'./pics/watermelon.jpg', name:'watermelon' },
{ imgSrc:'./pics/avocado.jpg', name:'avocado' },
{ imgSrc:'./pics/berrys.jpg', name:'berrys' },
{ imgSrc:'./pics/blueberry.jpg', name:'blueberry' },
{ imgSrc:'./pics/melon.jpg', name:'melon' },
{ imgSrc:'./pics/passionfruit.jpg', name:'passion fruit' },
]

const data = getData();


// let memoryCard = [

// {imgSrc: '.pics/apple.jpg'}



// ]