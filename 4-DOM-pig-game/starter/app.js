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


var scores, roundScore, previousRoll, scoreToWin, activePlayer, gamePlaying; // <-- Game Playing is our state variable and it is set to true inside of the initializeNewGame function

// The initializeNewGame() is declared below and is being called here.
initializeNewGame();

var value = document.querySelector(".final-score").value
console.log(value)


 document.querySelector(".final-score").addEventListener("change", function(){
    // console.log("This is working: " + this.value)
    
    if(isNaN(this.value)){
        gamePlaying = false;
        
        console.log(this.value + " is not a number!")
    }
    else{
        gamePlaying = true;
        console.log(this.value + " is a number!")
        scoreToWin = this.value
    }
 });



// This function rolls the dice
// Grabs the class called btn-roll add an click event listener on it that triggers the ananomous function
document.querySelector(".btn-roll").addEventListener("click", function(){
    if (gamePlaying){
        // Do Something Here
        // [x] Random Number
        var dice_0 = Math.floor(Math.random() * 6 ) + 1;
        var dice_1 = Math.floor(Math.random() * 6 ) + 1;
        // console.log("/////////////////////")
        // console.log("/////////////////////")
        // console.log("/////////////////////")
        // console.log(dice_0);
        // console.log(dice_1);
        // console.log("/////////////////////")
        // console.log("/////////////////////")
        // console.log("/////////////////////")

       
        // [x] Display the result
        // setting display to block shows the block 
        var  diceDom_0 =  document.querySelector(".dice-0");
        diceDom_0.style.display = "block";
        diceDom_0.src = "dice-" + dice_0 + ".png";


        var  diceDom_1 =  document.querySelector(".dice-1");
        diceDom_1.style.display = "block";
        diceDom_1.src = "dice-" + dice_1 + ".png";


        // [x] update the round score
        //      - only if the number is not a 1
        //      - if number is a 1 the player's score gets wiped out

        if ( (dice_0 === 6  || dice_1 === 6) && (dice_0 !== 1 && dice_1 !== 1)){
            console.log("handling in if statement")
            console.log(dice_0);
            console.log(dice_1);
            // store in previousRoll
            // previousRoll += dice;



            function updateAndMoveOn (){
                    // adding 6 to previousRoll count
                    previousRoll += 6;

                    // adding to Round
                    roundScore += dice_0 + dice_1

                    // displaying the current round score to the little red box
                    document.querySelector("#current-" + activePlayer).textContent = roundScore;

                    // console log to see what the current previous roll count is 
                    console.log("The current count of the previousRoll is now " + previousRoll);

                    //
            }

                //Check if both dice are 6
                if(dice_0 + dice_1 === 12){
                    console
                    // alert 
                    // go to next player
                    alert("You rolled a double 6")
                    nextPlayer()
                }
                else if (dice_0 === 6 || dice_1 === 6){
                    console.log("We are is the 6s else if statement adding previous count and updating red box")
                    console.log("upon entry the current previousRoll count is " + previousRoll)
                    // if the previous count is 6 go to next player 
                    // otherwise its not 6 so i need you to update the previousRoll 
                    // and the little red box
                    previousRoll === 6 ? nextPlayer() : updateAndMoveOn ();
                    // simplye checking what the count is.
                    console.log("upon leaving the current previousRoll count is " + previousRoll)

                    // Old problem resolved
                    // Current problem/ when a user has rolled 2 6s back to back.
                    // it goes to next player 
                    // but it also gives the next player the points he rolled
                    

                }
                else {

                    updateAndMoveOn ()
                }
         
       console.log("We are leaving the Larger if block");     
        }

        else if ((dice_0 !== 1 && dice_1 !== 1) && (dice_0 !== 6 && dice_1 !== 6)){
            console.log("handling in else if statement");
            console.log(dice_0);
            console.log(dice_1);

            roundScore += dice_0 + dice_1;

            // add the score to the current score in red box
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
            
            // resetting previousRoll when the number rolled is not a 1 or a 6
            previousRoll = 0;
            console.log("The current count of the previousRoll is now " + previousRoll)
        }  
        
        else {
        // Move to the Next player if it is a 1. when it moves to next player the value of previousRoll gets reset to 0
        // alert("youve rolled a 1")
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

        if (scores[activePlayer] >= scoreToWin){
            // tell them they've won
            console.log("You won");
            document.querySelector("#name-" + activePlayer).textContent = "You Won!"
            // document.querySelector(".btn-hold").classList.remove(".btn-hold");
            document.querySelector(".dice-0").style.display = "none";
            document.querySelector(".dice-1").style.display = "none";
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
 document.querySelector(".dice-0").style.display = "none";
 document.querySelector(".dice-1").style.display = "none";

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
    scoreToWin = 0
    value = 0
    // console.log(value)
    // Grabs the dice class and sets the style to none
    document.querySelector(".dice-0").style.display = "none";
    document.querySelector(".dice-1").style.display = "none";

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

////////////////////////////////////
////////////////////////////////////
//////// Coding challeng 6.2 ///////
////////////////////////////////////
////////////////////////////////////
////////////////////////////////////
// A player can set the predefined winning score 
// using an input field that is located in the UI
// (Hint: You can read the value with .value property in javaScript)
////////////////////////////////////
// [] Completed
////////////////////////////////////



////////////////////////////////////
////////////////////////////////////
//////// Coding challeng 6.3 ///////
////////////////////////////////////
////////////////////////////////////
////////////////////////////////////
// Add a second dice to the game
// The player loses his current score if one of the dice is 1
// (Hint: You will need CSS to position the second dice)
////////////////////////////////////
// [] Completed
////////////////////////////////////
   


