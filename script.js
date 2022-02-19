var userScore = 0;
var computerScore = 0;
var tieScore = 0;
var roundNumber = 1;

$(document).ready(function() {
    $('.choice').on({
        mouseenter: function() {
            $(this).css("background-color", "#f5e800");
        },
        mouseleave: function() {
            $(this).css("background-color", "#dbd011");
        }
    });
    $('#play-btn').on({
        mouseenter: function() {
            $(this).css("background-color", "#f5e800");
        },
        mouseleave: function() {
            $(this).css("background-color", "#dbd011");
        }
    });
    $('#rock').click(function() {
        playRound('Rock', computerPlay());
        displayScore();  
    });
    $('#paper').click(function() {
        playRound('Paper', computerPlay());
        displayScore();
    });
    $('#scissors').click(function() {
        playRound('Scissors', computerPlay());
        displayScore();
    })
    $('#play-btn').click(function() {
        restartGame();
    });
    $('.close-btn').click(function() {
        $('.modal').css({'display': 'none'})
    });
});


// Function for Computer Move
function computerPlay() {
    let moves = ['Rock', 'Paper', 'Scissors'];
    let move = moves[Math.floor(Math.random()*moves.length)];
    let moveText = move;
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
        case userSelection === 'Rock' && computerSelection === 'Scissors':
            $('.user-choice').html('<img class="move-icon" src=images/rock_white.svg>')
            $('.computer-choice').html('<img class="move-icon" src=images/scissors_white.svg>')
            break;
        case userSelection === 'Paper' && computerSelection === 'Rock':
            $('.user-choice').html('<img class="move-icon" src=images/paper_white.svg>')
            $('.computer-choice').html('<img class="move-icon" src=images/rock_white.svg>')
            break;
        case userSelection === 'Scissors' && computerSelection === 'Paper':
            $('.user-choice').html('<img class="move-icon" src=images/scissors_white.svg>')
            $('.computer-choice').html('<img class="move-icon" src=images/paper_white.svg>')
            break;
    }
}
function computerWin(userSelection, computerSelection) {
    switch(true) {     
        case userSelection === 'Rock' && computerSelection === 'Paper':
            $('.computer-choice').html('<img class="move-icon" src=images/paper_white.svg>')
            $('.user-choice').html('<img class="move-icon" src=images/rock_white.svg>')
            break;
        case userSelection === 'Paper' && computerSelection === 'Scissors':
            $('.computer-choice').html('<img class="move-icon" src=images/scissors_white.svg>')
            $('.user-choice').html('<img class="move-icon" src=images/paper_white.svg>')
            break;
        case userSelection === 'Scissors' && computerSelection === 'Rock':
            $('.computer-choice').html('<img class="move-icon" src=images/rock_white.svg>')
            $('.user-choice').html('<img class="move-icon" src=images/scissors_white.svg>')
            break;
    }
}

function tie(userSelection, computerSelection) {
    switch(true) {     
        case userSelection === 'Paper' && computerSelection === 'Paper':
            $('.user-choice').html('<img class="move-icon" src=images/paper_white.svg>')
            $('.computer-choice').html('<img class="move-icon" src=images/paper_white.svg>')
            break;
        case userSelection === 'Scissors' && computerSelection === 'Scissors':
            $('.user-choice').html('<img class="move-icon" src=images/scissors_white.svg>')
            $('.computer-choice').html('<img class="move-icon" src=images/scissors_white.svg>')
            break;
        case userSelection === 'Rock' && computerSelection === 'Rock':
            $('.user-choice').html('<img class="move-icon" src=images/rock_white.svg>')
            $('.computer-choice').html('<img class="move-icon" src=images/rock_white.svg>')
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
        case userSelection === 'Rock' && computerSelection === 'Scissors':
        case userSelection === 'Paper' && computerSelection === 'Rock':
        case userSelection === 'Scissors' && computerSelection === 'Paper':
            userWin(userSelection, computerSelection);
            userScore++;
            roundNumber++;
            updateRound();
            break;
        case userSelection === 'Rock' && computerSelection === 'Paper':
        case userSelection === 'Paper' && computerSelection === 'Scissors':
        case userSelection === 'Scissors' && computerSelection === 'Rock':
            computerWin(userSelection, computerSelection);
            computerScore++;
            roundNumber++;
            updateRound();
            result = 'Computer Win';
            break;   
    }
    isGameOver();  
}

function isGameOver() {
    if (userScore === 5 || computerScore === 5) {
        openModal();
    }
}

function openModal() {
    switch(true) {
        case userScore === 5:
            $('.modal').css({"display": "block"});
            $('.winner-message').text('You Win!')
            break;
        case computerScore === 5:
            $('.modal').css({"display": "block"});
            $('.winner-message').text('Computer Wins!')
            break;     
    }
}

function restartGame() {
    $('.modal').css({"display": "none"});
    userScore = 0;
    computerScore = 0;
    tieScore = 0;
    roundNumber = 1;
    displayScore();
    updateRound();
}
