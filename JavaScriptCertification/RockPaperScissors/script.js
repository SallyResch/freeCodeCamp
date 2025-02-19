function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const optionIndex = Math.floor(Math.random() * options.length);
  return options[optionIndex];
}

function hasPlayerWonTheRound(player, computer) {
  if((player === "Rock" && computer === "Scissors")|| (player === "Scissors" && computer === "Paper") || (player === "Paper" && computer === "Rock")){
    return true;
  }else{
    return false;
  }
}

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if(hasPlayerWonTheRound === true){
    const playerWon = "Player wins! "+ userOption +" beats " + computerResult;
    playerScore += 1;
    return playerWon;
  }else if(hasPlayerWonTheRound === false){
    const computerWon = "Computer wins! "+ computerResult +" beats " + userOption;
    computerScore += 1;
    return computerWon;
  }else{
    const tieResult = "It's a tie! Both chose " + userOption;
    return tieResult;
  }
}