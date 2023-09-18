function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"]
    const choice = choices[(Math.floor(Math.random() * choices.length))];

    return choice
}

function playRound (playSelection, computerSelection) {
    if (playSelection == "rock" && computerSelection == "paper"){
        return "You Lose! Paper beats Rock"
    }
    else if (playSelection == "paper" && computerSelection == "rock"){
        return "You Win! Paper beats Rock"
    }
    else if (playSelection == "rock" && computerSelection == "scissors"){
        return "You Lose! Rock beats Scissors"
    }
    else if (playSelection == "scissors" && computerSelection == "rock"){
        return "You Win! Rock beats Scissors"
    }
    else if (playSelection == "scissors" && computerSelection == "paper"){
        return "You Win! Scissors beats Paper"
    }
    else if (playSelection == "paper" && computerSelection == "scissors"){
        return "You Lose! Scissors beats Paper"
    }
    else
        return "It's a Draw! Replay"
    
}

let numberOfPlay = 5;

for (let i=0; i < numberOfPlay; i++ ) {
    
    const computerSelection = getComputerChoice();
    console.log(computerSelection)

    const playSelection = prompt(`Enter your choice (Round ${i}): `, "rock").toLowerCase();
    console.log(playSelection)

    text = playRound(playSelection, computerSelection)

    let winCount = 0;
    let loseCount = 0;

    if (text.includes("Win")) {
        winCount ++;
    }
    else if (text.includes("Lose")) {
        loseCount ++;
    }

    if (winCount > loseCount) {
        console.log("You have won the game!")
    }
    else if (winCount > loseCount) {
        console.log("You have lost the game!")
    }
    else {
        console.log("It's a Draw!")
    }
}