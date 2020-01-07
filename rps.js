//initialize the computer and user scored to 0
let computerScore = 0;
let userScore = 0;

 //define computer selection whoch we will assign the random choice to it
 let computerSelection;

 // define the element we are gonna manipulate with DOM from HTML
 const userBoard = document.getElementById('userBoard');
 const computerBoard = document.getElementById('computerBoard');
 const tieBoard = document.getElementById('tieBoard');
 const yourScore = document.getElementById('yourScore');
 const comScore = document.getElementById('comScore');


 // this function takes player selection which is the value of the button
 function playRound(playerSelection) {
     //assign the random value we get from the coputer selection to the computerSelection variable
     computerSelection = computerPlay();
     //compare computerSelection with playerSelection
     if(computerSelection === "rock" && playerSelection === "rock"
         || computerSelection === "paper" && playerSelection === "paper"
         || computerSelection === "scissors" && playerSelection === "scissors") {
             /** 
             all the cases are a tie so we are gonna update the elements to be a tie
             and as he user to play again 
             **/
             userBoard.textContent = "You picked " + playerSelection;
             computerBoard.textContent = "Computer picked " + computerSelection;
             tieBoard.textContent = "It's a tie, keep playing";
     } else if(computerSelection === "rock" && playerSelection === "scissors"
                 || computerSelection === "scissors" && playerSelection === "paper"
                 || computerSelection === "paper" && playerSelection === "rock") {

             /** 
            in every case above computer wins so we are gonna update the elements 
            to be a win for the computer and increase the computer score by 1
             **/
             userBoard.textContent = "You picked " + playerSelection;
             computerBoard.textContent = "Computer picked " + computerSelection;
             computerScore++;
             tieBoard.textContent = "Computer wins this round";
     } else if(computerSelection === "scissors" && playerSelection === "rock"
                 || computerSelection === "paper" && playerSelection === "scissors"
                 || computerSelection === "rock" && playerSelection === "paper") {
              
              /** 
            in every case above the user wins so we are gonna update the elements 
            to be a win for the user and increase the user score by 1
             **/       
             userBoard.textContent = "You picked " + playerSelection;
             computerBoard.textContent = "Computer picked " + computerSelection;
             userScore++;
             tieBoard.textContent = "You win this round";
             
     } else {
         console.log("Something went wrong!")
     }

     yourScore.textContent = `Your Score: ${userScore}`;
     comScore.textContent = `Computer Score: ${computerScore}`;
     whoWins();
 }


  //computer choose a random choice
  function computerPlay() {
     let comPlay;
     comPlay = Math.random();
     if(comPlay < .33) {
         return "rock";
     }else if(comPlay < .66) {
         return "paper";
     } else {
         return "scissors";
     }
 }

 //this finction to check if the computer score or user score reached 5 to decide who wins
 function whoWins() {
     if(computerScore >= 5){
         alert("Computer wins!!!!");
     } else if(userScore >= 5) {
         alert("Yaaaay You win!!!");
     }
 }