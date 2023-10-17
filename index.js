//  document.getElementById("count-el").innerText=20
// I just manipulated my html with javascript from 0  initial it changed to 20.

let countEl = document.getElementById("count-el")

console.log(countEl);

let addition= 0;

const increment=()=> {
    // addition = addition+ 1
    addition+= 1;
    countEl.innerHTML = addition
}

let saveEl = document.getElementById("save-el")





const save =()=> {
let countLog = addition +   " -  "

    saveEl.innerText = saveEl.innerText +"  "+ countLog
    
    countEl.innerHTML = 0;
    addition = 0;


}

const Ex = document.getElementById("welcome-el").style.color = "purple";
const people = document.getElementById("People-Entered").style.color = "yellow";









let Count = 0;
//variable holding this data or values 0;
console.log(Count);

const Age = 26;
console.log(Age);


let firstName = 'Yemi'; 

let secondName = 'good';

// let fullName = (`${firstName} ${secondName}`)
let fullName = firstName +  secondName;


console.log('My full name is',  fullName)


let Batch = 1
let secondBatch = 2

let total = Batch + secondBatch

console.log(total);


let username = "per"
let message = "You have 3 new notifications"
// console.log(message +" "+ username);


let welcomeEl = document.getElementById("welcome-el")

let name = 'Yemi';
let greeting = 'Welcome back my guy';


welcomeEl.innerText = name +" "+ greeting

// let myAge = 25;
// let humanDogRatio = 7;

// myDogAge = myAge * humanDogRatio
// console.log(myDogAge);


// let move = 7;

// move = move + 8;

// console.log(move);

// let bonusPoint = 50;

// bonusPoint = bonusPoint + 50;

// bonusPoint = bonusPoint -75;

// bonusPoint = bonusPoint +45;

// console.log(bonusPoint);


// const increment=()=>{
//     console.log("I just clicked you");
// }

// const countdown=() => {
//     console.log(1);
//     console.log(2);
//     console.log(3);

    
// }

// countdown();

// const helloNumber =() => {
//     console.log(42)
// }

// helloNumber();

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// function lapTimes (){
//     console.log(lap1 + lap2 + lap3);
//     let TotalTime = lap1 + lap2 + lap3;
//     console.log(TotalTime);
// }
// lapTimes(); 

// let lapsCompleted = 0;

// const lapsCompletedTimes =()=>{
// lapsCompleted = lapsCompleted + 1;
// }
// lapsCompletedTimes();
// lapsCompletedTimes();
// lapsCompletedTimes();
// console.log(lapsCompleted);

// let Count = 0;


// const increment =()=> {
//      console.log("clicked");

//     Count = Count + 1;
//     console.log(Count);

// }

let firstCard = 20;
let secondCard = 4;
let sum = firstCard + secondBatch;
let hasBlackJack = false;
let isAlive = true;

let messages = "";

if(sum <= 20){
    messages = "Do you want to draw a new Card?";
}else if(sum === 21){
        messages = "Whooo you have got the black jack"
}else{
    messages = "You are out of the game";
    isAlive = false
}

console.log(messages);
    

