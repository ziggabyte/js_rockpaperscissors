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

function playRound(playerSelection, scores) {
    let computerSelection = computerPlay();

    if (playerSelection == computerSelection) {
        playMessage.innerHTML = "Both picked " + playerSelection + ", nobody scores.";
    }

    switch (playerSelection) {
        case "rock":
            if (computerSelection == "paper") {
                playMessage.innerHTML = "You picked rock, computer picked paper - you score 1 point!";
                scores[0] += 1;
            }
            else if (computerSelection == "scissors") {
                playMessage.innerHTML = "You picked rock, but computer picked scissors - computer score 1 point.";
                scores[1] += 1;
            }
            break;

        case "paper":
            if (computerSelection == "rock") {
                playMessage.innerHTML = "You picked paper, computer picked rock - you score 1 point!";
                scores[0] += 1;
            }
            else if (computerSelection == "scissors") {
                playMessage.innerHTML = "You picked paper, but computer picked scissors - computer scores 1 point";
                scores[1] += 1;
            }
            break;

        case "scissors":
            if (computerSelection == "paper") {
                playMessage.innerHTML = "You picked scissors, computer picked paper - you score 1 point!";
                scores[0] += 1;
            }
            else if (computerSelection == "rock") {
                playMessage.innerHTML = "You picked scissors, but computer picked rock - computer scores 1 point";
                scores[1] += 1;
            }
            break;

        default:
            message.innerHTML = "default";
            break;
    }
}

function printScores(){
    scoreMessage.innerHTML = "Round " + rounds + ": Your score is " + scores[0] + ", computer's score is " + scores[1];
}

function reset(){
    gameButtons.style.display = "block";
    scoreMessage.innerHTML = " ";
    playMessage.innerHTML = " ";
    winnerMessage.innerHTML = " ";
    newRound.style.display = "none";
}

function checkRounds(rounds) {
    if (rounds > 5) {
        if (scores[0] > scores[1]) {
            winnerMessage.innerHTML = "You have played 5 rounds, and YOU are the winner!";
        }
        else if (scores[0] == scores[1]) {
            winnerMessage.innerHTML = "You have played your 5 rounds and it's a tie! Nobody wins!";
        }
        else {
            winnerMessage.innerHTML = "You have played 5 rounds, and COMPUTER is the winner!";
        }
        gameButtons.style.display = "none";
        newRound.style.display = "block";
        newRound.addEventListener("click", reset);
    } 
}

function game(playerSelection) {
    playRound(playerSelection, scores);
    printScores();
    rounds ++;
    checkRounds(rounds);
    if (rounds >= 6) {rounds = 1;}
}

let scores = [0,0];
let rounds = 1;

let rockButton = document.getElementById("rockButton");
let paperButton = document.getElementById("paperButton");
let scissorsButton = document.getElementById("scissorsButton");
let playMessage = document.getElementById("playMessage");
let scoreMessage = document.getElementById("scoreMessage");
let winnerMessage = document.getElementById("winnerMessage");
let gameButtons = document.getElementById("gameButtons");
let newRound = document.getElementById("newRound");
newRound.style.display = "none";

rockButton.addEventListener('click', function () { game("rock"); });
paperButton.addEventListener('click', function () { game("paper"); });
scissorsButton.addEventListener('click', function () { game("scissors"); });