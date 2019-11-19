/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// document.querySelector("#current-" + activePlayer).textContent = dice
// document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>";
// Grabs the id called score-0 and stores it in a variable called x
// var x = document.querySelector("#score-0").textContent;


var scores, roundScore, previousRoll, activePlayer, gamePlaying; // <-- Game Playing is our state variable and it is set to true inside of the initializeNewGame function

// The initializeNewGame() is declared below and is being called here.
initializeNewGame();

// This function rolls the dice
// Grabs the class called btn-roll add an click event listener on it that triggers the ananomous function
document.querySelector(".btn-roll").addEventListener("click", function(){
    if (gamePlaying){
        // Do Something Here
        // [x] Random Number
        var dice = Math.floor(Math.random() * 6 ) + 1;
        console.log(dice);
       
        // [x] Display the result
        // setting display to block shows the block 
        var  diceDom =  document.querySelector(".dice");
        diceDom.style.display = "block";
        diceDom.src = "dice-" + dice + ".png";


        // [x] update the round score
        //      - only if the number is not a 1
        //      - if number is a 1 the player's score gets wiped out

        if ( dice === 6 ){
            // store in previousRoll
            previousRoll += dice;
    
            // placing the round score into the UI
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
            // link to that player
            // clear after two rolls
            console.log("The dice is currently " + dice)
            console.log("The current count of the previousRoll is now " + previousRoll)

            // check to see if the dice roll amounts to 12
            previousRoll === 12 ? nextPlayer() : roundScore += dice;
        }

        else if (dice !== 1 && dice !== 6){
            // add the score
            roundScore += dice;
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
            // resetting previousRoll when the number rolled is not a 1 or a 6
            previousRoll = 0;
            console.log("The current count of the previousRoll is now " + previousRoll)
        }  
        
        else {
        // Move to the Next player if it is a 1. when it moves to next player the value of previousRoll gets reset to 0
        nextPlayer();

       }
    }
});



document.querySelector(".btn-hold").addEventListener("click", function(){


if(gamePlaying){
        // Add the current score to the Global score
            scores[activePlayer] += roundScore;
            

        // Update the UI

        document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
        // Check if there is a winner

        if (scores[activePlayer] >= 20){
            // tell them they've won
            console.log("You won");
            document.querySelector("#name-" + activePlayer).textContent = "You Won!"
            // document.querySelector(".btn-hold").classList.remove(".btn-hold");
            document.querySelector(".dice").style.display = "none";
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
            gamePlaying = false;
        }
        else{
            // Move to the Next player
            nextPlayer();
        
        }
    }








});

function nextPlayer(){
 // move on to the next player
 console.log("Next players turn");
   

 // Using a teranary operator to change the active player from 0 to 1
 activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
 // when this player rolls the roundScore should start from 0
 roundScore = 0;

 // resetting the previousRoll to zero when the player changes.
 previousRoll = 0;

 document.getElementById("current-0").textContent = "0";
 document.getElementById("current-1").textContent = "0";


 // Manually toggling a class
 // document.querySelector('.player-0-panel').classList.remove("active");
 // document.querySelector('.player-1-panel').classList.add("active");


 // Same as the above could but we will use the toggle method
 // if a player has the class active it will remove it and if it doesn't it will add it
 document.querySelector('.player-0-panel').classList.toggle("active");
 document.querySelector('.player-1-panel').classList.toggle("active");


 // hide the dice when a player rolls a 1
 document.querySelector(".dice").style.display = "none";

}

// When the button is pressed then call the initialize new game function
document.querySelector(".btn-new").addEventListener("click", initializeNewGame);

// Function Declarations are hoisted.
// Because function declarations are hoisted the first time the program runs
// it sets the global variables score, roundScore activePlayer and gamePlaying all to undefined 
// (see: above where the global variables var score, roundScore, activePlayer, and gamePlaying are declared)
// when the program gets called/ executed (see: above where initializeNewGame is called)
// the variables inside of this function reset the global variables at the top of the page to 
// their respective values. 
// Because this is done all other functions are able to access the values of the global variables
// it might look like the variables belong to this functions lexical scope but it does not.
// the variables are simply being set.
function initializeNewGame(){
    scores = [0, 0];
    roundScore = 0;
    previousRoll = 0;
    activePlayer = 0; 
    gamePlaying = true  

    // Grabs the dice class and sets the style to none
    document.querySelector(".dice").style.display = "none";

    // Sets the folowing text content to 0
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.getElementById("name-0").textContent = "Player 0"
    document.getElementById("name-1").textContent = "Player 1"


    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");

    // remove active class from each player
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");

    // add the active class back to the first plalyer
    document.querySelector(".player-0-panel").classList.add("active");

}


////////////////////////////////////
////////////////////////////////////
//////// Coding challeng 6.1 ///////
////////////////////////////////////
////////////////////////////////////
////////////////////////////////////
// A player loses their entire score if they roll two sixes in a row
// after that it is the next playe's turn 
// (Hint: Always save the previos dice roll in a seperate variable)
////////////////////////////////////
// [x] Completed
////////////////////////////////////


   


