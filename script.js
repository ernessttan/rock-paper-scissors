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
    let moveText = 'Computer Chose ' + move;
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
            $('.user-choice').html('<img class="move-icon" src=images/rock_green.svg>')
            $('.computer-choice').html('<img class="move-icon" src=images/scissors.svg>')
            break;
        case userSelection === 'paper' && computerSelection === 'rock':
            $('.user-choice').html('<img class="move-icon" src=images/paper_green.svg>')
            $('.computer-choice').html('<img class="move-icon" src=images/rock.svg>')
            break;
        case userSelection === 'scissors' && computerSelection === 'paper':
            $('.user-choice').html('<img class="move-icon" src=images/scissors_green.svg>')
            $('.computer-choice').html('<img class="move-icon" src=images/paper.svg>')
            break;
    }
}
function computerWin(userSelection, computerSelection) {
    switch(true) {     
        case userSelection === 'rock' && computerSelection === 'paper':
            ('.computer-choice').html('<img class="move-icon" src=images/paper_green.svg>')
            $('.user-choice').html('<img class="move-icon" src=images/rock.svg>')
            break;
        case userSelection === 'paper' && computerSelection === 'scissors':
            $('.computer-choice').html('<img class="move-icon" src=images/scissors_green.svg>')
            $('.user-choice').html('<img class="move-icon" src=images/paper.svg>')
            break;
        case userSelection === 'scissors' && computerSelection === 'rock':
            $('.computer-choice').html('<img class="move-icon" src=images/rock_green.svg>')
            $('.user-choice').html('<img class="move-icon" src=images/scissors.svg>')
            break;
    }
}

function tie(userSelection, computerSelection) {
    switch(true) {     
        case userSelection === 'paper' && computerSelection === 'paper':
            $('.user-choice').html('<img class="move-icon" src=images/paper.svg>')
            $('.computer-choice').html('<img class="move-icon" src=images/paper.svg>')
            break;
        case userSelection === 'scissors' && computerSelection === 'scissors':
            $('.user-choice').html('<img class="move-icon" src=images/scissors.svg>')
            $('.computer-choice').html('<img class="move-icon" src=images/scissors.svg>')
            break;
        case userSelection === 'rock' && computerSelection === 'rock':
            $('.user-choice').html('<img class="move-icon" src=images/rock.svg>')
            $('.computer-choice').html('<img class="move-icon" src=images/rock.svg>')
            break;
    }
}

function updateRound() {
    $('.round-number').html(roundNumber);
}

function playRound(userSelection, computerSelection) {
    let result;
    switch(true) {
        case userSelection === computerSelection:
            tie(userSelection, computerSelection);
            tieScore++;
            roundNumber++;
            updateRound();
            result = 'Tie!';
            break;
        case userSelection === 'rock' && computerSelection === 'scissors':
        case userSelection === 'paper' && computerSelection === 'rock':
        case userSelection === 'scissors' && computerSelection === 'paper':
            userWin(userSelection, computerSelection);
            userScore++;
            roundNumber++;
            updateRound();
            break;
        case userSelection === 'rock' && computerSelection === 'paper':
        case userSelection === 'paper' && computerSelection === 'scissors':
        case userSelection === 'scissors' && computerSelection === 'rock':
            computerWin(userSelection, computerSelection);
            computerScore++;
            roundNumber++;
            updateRound();
            result = 'Computer Win';
            break;     
    }  
}

// Function for a full game
function game(userMove) {
    console.log('Game Start');
    if (userScore === 5) {
        $('.modal').css({"display": "block"});
        $('.winner-message').text('You Win!')
        return;
    } else if (computerScore === 5) {
        $('.modal').css({"display": "block"});
        $('.winner-message').text('Computer Wins!') 
    }
    
    else {
        playRound(userMove, computerPlay());
    } 
}
