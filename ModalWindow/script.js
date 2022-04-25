'use strict';

const btnModals = document.querySelectorAll('.show-modal');
const showModal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

function openModal(){
    showModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
function hideModal (){
    showModal.classList.add('hidden');
    overlay.classList.add('hidden');
    }

for(let modal of btnModals){
    modal.addEventListener('click',openModal)
};

closeModal.addEventListener('click',hideModal)  // Event listener for 'X' button

overlay.addEventListener('click',hideModal)  //Event listener for overlay 

//Keyboard event listener. Response only for Escape Key event
document.addEventListener('keydown',function(e){
    if(e.key === 'Escape'){
        if(!showModal.classList.contains('hidden')) hideModal();
    }
})
