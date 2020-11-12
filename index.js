function computerPlay() {
    let rand = Math.floor((Math.random() * (1, 4)) + 1); 
    let computerSelection;
    
    switch (rand) {
        case 1:
            computerSelection = "rock";
            break;
        case 2:
            computerSelection = "paper";
            break;
        case 3:
            computerSelection = "scissors";
            break;
    }
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    let score = 0;

    if (playerSelection == computerSelection) {
        console.log("Both picked " + playerSelection + ", nobody scores.");
    }
    
    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            console.log("You picked rock, computer picked paper - you score 1 point!");
            score++;
        }
        else if (computerSelection == "scissors") {
            console.log("You picked rock, but computer picked scissors - computer score 1 point.");
            score--;
        }
    }

    if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            console.log("You picked paper, computer picked rock - you score 1 point!");
            score++;
        }
        else if (computerSelection == "scissors") {
            console.log("You picked paper, but computer picked scissors - computer scores 1 point");
            score--;
        }
    }

    if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            console.log("You picked scissors, computer picked paper - you score 1 point!");
            score++;
        }
        else if (computerSelection == "rock"){
            console.log("You picked scissors, but computer picked rock - computer scores 1 point");
            score--;
        }
    }

    return score;
}

function game() {
    let score = 0;
    let computerSelection = computerPlay();
    let playerSelection = prompt("Rock, paper or scissors?").toLowerCase();

    for (let i = 0; i < 5; i++){
        score += playRound(playerSelection, computerSelection);
        playerSelection = prompt("rock, paper or scissors?").toLowerCase();
        computerSelection = computerPlay();
    }

    if (score > 0) {
        console.log("You win the game!");
    } 
    else if (score == 0) {
        console.log("Nobody wins the game");
    }
    else if(score < 0) {
        console.log("Computer wins the game");
    }
}

game();