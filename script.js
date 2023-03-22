'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const openModal = document.querySelectorAll('.show-modal');

console.log(openModal);

// function to openModal

const modalOpen = function () {
    console.log("button clicked");
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

}




// function to close modal  
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


for (let i = 0; i < openModal.length; i++) {
    openModal[i].addEventListener('click', modalOpen)
}



btnClose.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

// key press(Escape)

document.addEventListener('keydown' , function(e) {
    console.log(e.key);

    if(e.key=='Escape') {
        if(!modal.classList.contains('hidden')) {
            closeModal();
        }
    }
})