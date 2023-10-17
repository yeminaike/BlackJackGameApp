
//Math.random example
// let randomNumber = Math.random() *6;
// console.log(randomNumber);



//if we want a range of numbers between 1 to 6
// let randomNumber = Math.floor(Math.random() * 6) +1
// console.log(randomNumber);



const rollDice = () => {
    let randomNumber = Math.floor(Math.random() *6) + 1
    return randomNumber
}
console.log(rollDice());

const getRandomCard =()=> {

    // let randomNumber = Math.floor(Math.random() * 13) + 1
    // return randomNumber;

    let randomNumber = Math.floor(Math.random()*13) + 1

    if(randomNumber >10){
        return 10;
    }else if (randomNumber === 1){
        return 11
    }else{
        return randomNumber;
    }
}

let cards = [];

let sum = 0;

let hasBlackJack =  false;

let isAlive = false;

let message = ""




const messageEL = document.querySelector("#message-el")
console.log(messageEL);

const sumEL = document.querySelector("#sum-el");

const cardEL = document.querySelector("#card-el");


let player = {
    name: 'Per',
    chips: 145
}

let playerEl = document.getElementById("player-el")
 playerEl.textContent = player.name + ": $ " + player.chips






const renderGame =() =>{

cardEL.textContent ="Cards"

for(let i = 0;  i < cards.length;  i++) {
    cardEL.textContent = cardEL.textContent  + cards[i] + "  ";
}

sumEL.textContent ="Sum:" + sum
if (sum <=20 ) {
    message = "Do you want to draw a new Card ?"
}else if (sum === 21) {
    message = "Wow!! you've have got the black Jack"
    hasBlackJack = true;

} else {
message = "You are out of the game!"
isAlive = false
}

messageEL.textContent = message;

}

const newCard = () => {

    // let isAlive = true;
    // let isNoBlackJack = false;
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack

    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard();

        sum = sum + card;
    
        cards.push(card);
        console.log(cards);
    
    
        // console.log("Drawing a new Card from the Deck")
        renderGame();
    }

    }

   

const startGame =() =>{
     isAlive = true
     let firstCard = getRandomCard();
     let secondCard = getRandomCard();
      cards = [firstCard, secondCard];
      sum = firstCard + secondCard;
    renderGame();
}



// let featuredPosts = [
//     "check my Post",
//     "Here is my code",
//     "I've just relaunched my Portfolio"

// ]

// featuredPosts[0];
// console.log(featuredPosts[0]);
// console.log(featuredPosts[1]);

// console.log(featuredPosts.length);



// let messages = ["Hi", "WhatsUp", "How far"]

// let newMessages = "I'm new here"


// messages.push(newMessages)

// console.log(messages);  


let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function getHand() {
    let randomIndex = Math.floor( Math.random() * 3)
    return hands[randomIndex]
    console.log(randomIndex)
}

console.log( getHand() )