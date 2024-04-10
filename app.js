//object
let player = {
    name : "Joe" , chips :145 
}
//array - ordered list of items
let cars = [];
let sum = 0;
let hasBlackJack = false;
//variable to hold the state of the player
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

//object 

 

let playerEL = document.getElementById("player-el");
playerEL.textContent = player.name + " : $ " + player.chips;

function getRandomCard() {
    
    let random = Math.floor(Math.random() * 13) + 1;
     
    if (random === 1) {
        return 11
    }
    else if (random > 10) {
        return 10;
    }else { return random
    }
    
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard =getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    
    renderGame();
}

function renderGame() {
    sumEl.textContent = "Sum : " + sum;
    cardsEl.textContent = "Cards :" 

    for (let i = 0; i < cards.length; i++){
        
        cardsEl.textContent += cards[i] + " ";
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card ";
       
        
    } else if (sum === 21) {
        message = "Blackjack ";
       
        hasBlackJack = true;
    
    } else {
        message = "You are bust ";
       
         isAlive = false;
    }
    messageEl.textContent = message;
   
   
}
function newCard() {

    

    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        
        cards.push(card);
        renderGame();

    }
    
        
}










