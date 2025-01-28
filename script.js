/*
Create a rock, paper, scissors game
I/ Request:
When player click one of rock, paper, or scissors
Computer auto pick a rock, paper, or scissors itself
Compare the selection between player and computer
  If player wins, print "You win!, <your choice> beats <computer's choice>"
  If player lose, print "You lose!, <computer's choice> beats <your choice>"
  If tie, print tie
When one wins a round, add 1 to the total score of the winner
Announce a winner of the game once one player reaches 5 points.

II/ Divide the request.
Create 3 button where player can pick rock, paper, scissors

computer auto pick

compare the two selections

add 1 to the total score of the winner when they win

Announce a winner of the game once one player reaches 5 points.


III/ Pseudocode
Create 3 button where player can pick rock, paper, scissors
  GET things that player pick
  SET playerSelection = things that player pick.
  
computer auto pick
  CALL random and assign result of random to val
  IF val <= 0 and < 1/3 THEN computerSelection = rock
  ELSE IF val >= 1/3 and < 2/3 THEN computerSelection = paper
  ELSE IF val >= 2/3 and < 1 THEN computerSelection = scissors
compare the two selections
  IF playerSelection = rock and computerSelection = rock THEN print Tie!
  ELSE IF playerSelection = rock and computerSelection = paper THEN print "You lose!, <computer's choice> beats <your choice>"
  ELSE IF playerSelection = rock and computerSelection = scissors THEN print "You win!, <your choice> beats <computer's choice>"

  IF playerSelection = paper and computerSelection = paper THEN print Tie!
  ELSE IF playerSelection = paper and computerSelection = scissors THEN print "You lose!, <computer's choice> beats <your choice>"
  ELSE IF playerSelection = paper and computerSelection = rock THEN print "You win!, <your choice> beats <computer's choice>"

  IF playerSelection = scissors and computerSelection = scissors THEN print Tie!
  ELSE IF playerSelection = scissors and computerSelection = rock THEN print "You lose!, <computer's choice> beats <your choice>"
  ELSE IF playerSelection = scissors and computerSelection = paper THEN print "You win!, <your choice> beats <computer's choice>"

  IF player win, return 1
  ELSE IF player lose, return 0
  ELSE IF tie, return -1
add 1 to the total score of the winner when they win
  INIT playerScore = 0 and computerScore = 0;
  IF player wins, increase playerScore by 1
  ELSE IF computer wins, increase computerScore by 1;
  ENDIF
  Check result each round
Announce a winner of the game once one player reaches 5 points.

*/

// Create 3 button where player can pick rock, paper, scissors
//  GET things that player pick
//  SET playerSelection = things that player pick.
const selections = document.querySelectorAll(".selection");
selections.forEach((selection) => {
  selection.addEventListener("click", () => {
    const playerInput = selection.innerHTML;
    const humanChoice = getHumanChoice(playerInput);
    playGame(humanChoice, playerScore, computerScore);
  });
});

function getHumanChoice(playerInput) {
  const playerSelection = playerInput.toLowerCase();

  return playerSelection;
}

// Random computerSelection
function getComputerChoice() {
  const val = Math.random();
  let computerSelection = "";
  if (val >= 0 && val < 1 / 3) {
    computerSelection = "rock";
  } else if (val >= 1 / 3 && val < 2 / 3) {
    computerSelection = "paper";
  } else if (val >= 2 / 3 && val < 1) {
    computerSelection = "scissors";
  }

  return computerSelection;
}

// compare two selections
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    console.log(`You lose!, ${computerSelection} beats ${playerSelection}`);
    return 0;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log(`You win!, ${playerSelection} beats ${computerSelection}`);
    return 1;
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    console.log(`Tie!`);
    return -1;
  }

  if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log(`You lose!, ${computerSelection} beats ${playerSelection}`);
    return 0;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log(`You win!, ${playerSelection} beats ${computerSelection}`);
    return 1;
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    console.log(`Tie!`);
    return -1;
  }

  if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log(`You lose!, ${computerSelection} beats ${playerSelection}`);
    return 0;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log(`You win!, ${playerSelection} beats ${computerSelection}`);
    return 1;
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    console.log(`Tie!`);
    return -1;
  }
}

let playerScore = {
  value: 0,
};
let computerScore = {
  value: 0,
};
function playGame(humanChoice, playerScore, computerScore) {
  const playerSelection = humanChoice;
  const computerSelection = getComputerChoice();

  // add 1 to the total score of the winner when they win
  const val = playRound(playerSelection, computerSelection);
  if (val === 1) playerScore.value++;
  else if (val === 0) computerScore.value++;

  displayResult(playerScore, computerScore);
}

function displayResult(playerScore, computerScore) {
  const displayedResult = document.querySelector("div");
  displayedResult.innerHTML = `Your score: ${playerScore.value}, Computer's score: ${computerScore.value}`;

  if (playerScore.value === 5) {
    const finalResult = document.createElement("div");
    finalResult.innerHTML = "You completely win. Congratulation";
    displayedResult.append(finalResult);
  } else if (computerScore.value === 5) {
    const finalResult = document.createElement("div");
    finalResult.innerHTML = "You completely lose.";
    displayedResult.append(finalResult);
  }
}
