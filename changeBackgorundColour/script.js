const colourBtn = document.querySelector('.colourBtn');
const body = document.querySelector('body');

const colour = ['red', 'yellow', 'green', '#3b5998'];

colourBtn.addEventListener('click', changeColour);

function changeColour(){
    let random = Math.floor(Math.random()*colour.length);
    body.style.backgroundColor = colour[random];
}