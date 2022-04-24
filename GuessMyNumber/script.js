'use strict';

//Add Event listener for check button

document.querySelector('.check').addEventListener('click',function(){
    const userGuess = Number(document.querySelector('.guess').value);
    console.log(userGuess,typeof userGuess)

    if(!userGuess){
        document.querySelector('.message').textContent = 'No Number Selected.'
    }

})