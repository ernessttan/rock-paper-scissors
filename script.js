// Create Array for possible moves


// Global Variables for Score and rounds
var userScore = 0;
var computerScore = 0;
var tieScore = 0;
var roundNumber = 1;

$(document).ready(function() {
    $('#rock').click(function() {
        game('rock')
        displayScore();
    });
    $('#paper').click(function() {
        game('paper')
        displayScore();
    });
    $('#scissors').click(function() {
        game('scissors');
        displayScore();
    })
});


// Function for Computer Move
function computerPlay() {
    let moves = ['rock', 'paper', 'scissors'];
    let move = moves[Math.floor(Math.random()*moves.length)];
    let moveText = 'Computer chose ' + move;
    $('#computer-choices').text(moveText);
    return move;
}

function displayScore() {
    $('#user-score').text(userScore);
    $('#computer-score').text(computerScore);
    $('#tie-score').text(tieScore);
}

function userWin(userSelection, computerSelection) {
    switch(true) {     
        case userSelection === 'rock' && computerSelection === 'scissors':
            $('.moves').append(`<li><div id="user-rock-green" class="move margin-right"><img src="images/rock_green.svg"></div><div class="round-number">${roundNumber}</div><div id="computer-scissors" class="move margin-left"><img src="images/scissors.svg"></div></li>`);
            $('.user-choice').html('<img src=images/rock_green.svg>')
            $('.computer-choice').html('<img src=images/scissors.svg>')
            break;
        case userSelection === 'paper' && computerSelection === 'rock':
            $('.moves').append(`<li><div id="user-paper-green" class="move margin-right"><img src="images/paper_green.svg"></div><div class"round-number">${roundNumber}</div><div id="computer-rock" class="move margin-left"><img src="images/rock.svg"></div></li>`);
            $('.user-choice').html('<img src=images/paper_green.svg>')
            $('.computer-choice').html('<img src=images/rock.svg>')
            break;
        case userSelection === 'scissors' && computerSelection === 'paper':
            $('.moves').append(`<li><div id="user-scissors-green" class="move margin-right"><img src="images/scissors_green.svg"></div><div class"round-number">${roundNumber}</div><div id="computer-paper" class="move margin-left"><img src="images/paper.svg"></div></li>`);
            $('.user-choice').html('<img src=images/scissors_green.svg>')
            $('.computer-choice').html('<img src=images/paper.svg>')
            break;
    }
}
function computerWin(userSelection, computerSelection) {
    switch(true) {     
        case userSelection === 'rock' && computerSelection === 'paper':
            $('.moves').append(`<li><div id="user-rock" class="move margin-right"><img src="images/rock.svg"></div><div class="round-number">${roundNumber}</div><div id="computer-paper-green" class="move margin-left"><img src="images/paper_green.svg"></div></li>`);
            ('.computer-choice').html('<img src=images/paper_green.svg>')
            $('.user-choice').html('<img src=images/rock.svg>')
            break;
        case userSelection === 'paper' && computerSelection === 'scissors':
            $('.moves').append(`<li><div id="user-paper" class="move margin-right"><img src="images/paper.svg"></div><div class"round-number">${roundNumber}</div><div id="computer-scissors-green" class="move margin-left"><img src="images/scissors_green.svg"></div></li>`);
            $('.computer-choice').html('<img src=images/scissors_green.svg>')
            $('.user-choice').html('<img src=images/paper.svg>')
            break;
        case userSelection === 'scissors' && computerSelection === 'rock':
            $('.moves').append(`<li><div id="user-scissors" class="move margin-right"><img src="images/scissors.svg"></div><div class"round-number">${roundNumber}</div><div id="computer-rock-green" class="move margin-left"><img src="images/rock_green.svg"></div></li>`);
            $('.computer-choice').html('<img src=images/rock_green.svg>')
            $('.user-choice').html('<img src=images/scissors.svg>')
            break;
    }
}

function tie(userSelection, computerSelection) {
    switch(true) {     
        case userSelection === 'paper' && computerSelection === 'paper':
            $('.moves').append(`<li><div id="user-paper" class="move margin-right"><img src="images/paper.svg"></div><div class="round-number">${roundNumber}</div><div id="computer-paper-green" class="move margin-left"><img src="images/paper.svg"></div></li>`);
            $('.user-choice').html('<img src=images/paper.svg>')
            $('.computer-choice').html('<img src=images/paper.svg>')
            break;
        case userSelection === 'scissors' && computerSelection === 'scissors':
            $('.moves').append(`<li><div id="user-scissors" class="move margin-right"><img src="images/scissors.svg"></div><div class"round-number">${roundNumber}</div><div id="computer-scissors-green" class="move margin-left"><img src="images/scissors_green.svg"></div></li>`);
            $('.user-choice').html('<img src=images/scissors.svg>')
            $('.computer-choice').html('<img src=images/scissors.svg>')
            break;
        case userSelection === 'rock' && computerSelection === 'rock':
            $('.moves').append(`<li><div id="user-rock" class="move margin-right"><img src="images/rock.svg"></div><div class"round-number">${roundNumber}</div><div id="computer-rock-green" class="move margin-left"><img src="images/rock_green.svg"></div></li>`);
            $('.user-choice').html('<img src=images/rock.svg>')
            $('.computer-choice').html('<img src=images/rock.svg>')
            break;
    }
}

function playRound(userSelection, computerSelection) {
    let result;
    switch(true) {
        case userSelection === computerSelection:
            tie(userSelection, computerSelection);
            tieScore++;
            roundNumber++;
            result = 'Tie!';
            break;
        case userSelection === 'rock' && computerSelection === 'scissors':
        case userSelection === 'paper' && computerSelection === 'rock':
        case userSelection === 'scissors' && computerSelection === 'paper':
            userWin(userSelection, computerSelection);
            userScore++;
            roundNumber++;
            break;
        case userSelection === 'rock' && computerSelection === 'paper':
        case userSelection === 'paper' && computerSelection === 'scissors':
        case userSelection === 'scissors' && computerSelection === 'rock':
            computerWin(userSelection, computerSelection);
            computerScore++;
            roundNumber++;
            result = 'Computer Win';
            break;     
    }  
}



// Function for a full game
function game(userMove) {
    console.log('Game Start');
    if (userScore + tieScore + computerScore === 5) {
        return;
    } else {
        playRound(userMove, computerPlay());
    } 
}

// Function to receive user input