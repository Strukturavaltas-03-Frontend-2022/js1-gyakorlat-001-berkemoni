'use strict';

function handleClick(i) {
    elements[i].addEventListener('click', () => {
        console.log( elements[i].innerHTML);
    })  
}

let elements = document.querySelectorAll('.button');
for (let i = 0; i < elements.length; i += 1) {
    handleClick(i);
}