'use strict';

//store Elements
const player0El =document.querySelector('.player--0');
const player1El =document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
//button elements
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');
//current score elements
const currentScoreEl = document.getElementById('current--0');
const currentScoreE2 = document.getElementById('current--1');
//set current score to '0'


let currentScore,finalScores,activePlayer,playing;

function init(){
    currentScore = 0;
    finalScores =[0,0];
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0 ;
    currentScoreEl.textContent = 0;
    currentScoreE2.textContent = 0;

    //hide dice Initially
    diceEl.classList.add('hidden');

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}


init();

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  };


// Actions when clicked on roll dice button
btnRoll.addEventListener('click',function(){
    if(playing){
    //1. Generate Random number between 1 to 6
    const rolledNumber = Math.trunc(Math.random()*6)+1;
    
    //show Dice 
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${rolledNumber}.png`;

    //update current score
    if(rolledNumber === 1){
        switchPlayer();
    }else{
        currentScore += rolledNumber;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
}
})

btnHold.addEventListener('click',function(){
    if(playing){
    finalScores[activePlayer] = finalScores[activePlayer] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = finalScores[activePlayer];
    checkWinner(finalScores[activePlayer]);
    }
})

function checkWinner(finalScore){
    if (finalScore >= 20) {
        // Finish the game
        playing = false;
        diceEl.classList.add('hidden');
  
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add('player--winner');
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.remove('player--active');
      } else {
        // Switch to the next player
        switchPlayer();
      }
}

//reset the game
btnNewGame.addEventListener('click',init);
