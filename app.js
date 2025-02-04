 // here we used a default operator to set a default value for score
 const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

function pickComputerMove() {
    let computerMove = '';

    randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper'; 
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors'; 
    }

    return computerMove;
}

function results(move, computerMove) {
    let result = '';

    if (computerMove === 'rock' && move === 'rock') {
        result = `It's a Tie.`;
        score.ties++;
    } else if (computerMove === 'rock' && move === 'scissors') {
        result = 'You Lose.';
        score.losses++;
    } else if (computerMove === 'rock' && move === 'paper') {
        result = 'You Win.';
        score.wins++; 
    }
    else if (computerMove === 'paper' && move === 'paper') {
        result = `It's a Tie.`;
        score.ties++;
    } else if (computerMove === 'paper' && move === 'rock') {
        result = 'You Lose.';
        score.losses++;
    } else if (computerMove === 'paper' && move === 'scissors') {
        result = 'You Win.';
        score.wins++; 
    }
    else if (computerMove === 'scissors' && move === 'scissors') {
        result = `It's a Tie.`;
        score.ties++;
    } else if (computerMove === 'scissors' && move === 'paper') {
        result = 'You Lose.';
        score.losses++;
    } else if (computerMove === 'scissors' && move === 'rock') {
        result = 'You Win.';
        score.wins++; 
    }

    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `You picked <img src="assets/${move}-emoji.png" class="move-icon"> and Computer picked <img src="assets/${computerMove}-emoji.png" class="move-icon">`;
}