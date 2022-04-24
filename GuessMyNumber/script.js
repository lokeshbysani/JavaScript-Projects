'use strict';

let secretNumber = Math.trunc((Math.random()*20))+1;
let score = 20;
let highScore = 0;

//Add Event listener for check button
document.querySelector('.check').addEventListener('click',function(){
    const userGuess = Number(document.querySelector('.guess').value);
    console.log(userGuess,typeof userGuess)
    let userDispalyMessage ;
   
    if(!userGuess){                                                                   //when no input from user
        userDispalyMessage = 'No Number Selected.';
    }else if(userGuess === secretNumber){                            //correct guess from user
        userDispalyMessage = 'Correct Guess.' ;
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        if(score>highScore){
            highScore = score;
        }
    }else if(userGuess > secretNumber){                                //guess is too high
        if(score>1){
            userDispalyMessage = 'Number is too high';
            score --;
        }else{
            userDispalyMessage = 'You lost the game';
            score =0;
        }
    }else if(userGuess < secretNumber){                           //guess is too low
        if(score>1){
            userDispalyMessage = 'Number is too low';
            score --;
        }else{
            userDispalyMessage = 'You lost the game';
            score =0;
        }
    }
    document.querySelector('.message').textContent = userDispalyMessage
    document.querySelector('.score').textContent = score
    document.querySelector('.highscore').textContent = highScore
})


//Add Event listener for Again button. this is a reset button
document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secretNumber = Math.trunc((Math.random()*20))+1;
    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    const userGuess = Number(document.querySelector('.guess').value);

    console.log(userGuess,typeof userGuess)
})