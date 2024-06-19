// Initializes scores at 0 
let humanScore = 0;
let computerScore = 0;

// Uses a random number generator to mkae a descision on rock, paper, or scissors
function getComputerChoice() {
  let randomNumber = (Math.floor(Math.random() * 3) + 1);
  if(randomNumber === 1){ 
    return ("rock");
  } else if (randomNumber === 2) {
    return ("paper");
  } else {
    return ("scissors");
  }
}

// Takes user input, ensuring it is normalized for capitalization and is a valid input
function getHumanChoice() {
  let humanChoice;
  while(true){
    humanChoice = prompt("Enter 'rock', 'paper', or 'scissors'.");
    humanChoice = humanChoice.toLowerCase();
    if((humanChoice != "rock") && (humanChoice != "paper") && (humanChoice != "scissors")) {
      alert("That is an invalid answer!");
    } else {
      break;
    }
  }
return humanChoice;
}

// Creates the game logic for a singular round of Rock Paper Scissors, including the winners and losers
function playRound(humanChoice, computerChoice){
  if (humanChoice == "rock") {
    if (computerChoice == "rock") {
      alert("It's a tie! The computer chose rock!");
    } else if (computerChoice == "paper") {
      alert("You lose! The computer chose paper!");
      computerScore ++;
    } else {
      alert("You win! The computer chose scissors!");
      humanScore ++;
    }
  } else if (humanChoice == "paper") {
    if (computerChoice == "rock") {
      alert("You win! The computer chose rock!");
      humanScore ++
    } else if (computerChoice == "paper") {
      alert("It's a tie! The computer chose paper!");
    } else {
      alert("You lose! The computer chose scissors!");
      computerScore ++;
    }
  } else {
    if (computerChoice == "rock") {
      alert("You lose! The computer chose rock!");
      computerScore ++;
    } else if (computerChoice == "paper") {
      alert("You win! The computer chose paper!");
      humanScore ++;
    } else {
      alert("It's a tie! The computer chose scissors!");
    }
  }
}

// Creates a 5-round game of Rock Paper Scissors, looping until the 5th round is over, and then declares a winner
function playGame() {
  for (let counter = 0; counter < 5; counter ++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  alert(`The computer's score is ${computerScore}.`);
  alert(`Your score is ${humanScore}.`);
  if (computerScore > humanScore) {
    alert("You lost!");
  } else if (computerScore < humanScore) {
    alert("You won!");
  } else {
    alert("It's a tie!");
  }
}

playGame();