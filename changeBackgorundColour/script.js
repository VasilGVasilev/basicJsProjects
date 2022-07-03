const hexNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const colourBtn = document.querySelector('.colourBtn');
const body = document.querySelector('body');
const hex = document.querySelector('.hex')

colourBtn.addEventListener('click', changeColour);

function changeColour(){
    let hexColour = '#';
    for (let i = 0; i < 6; i++){
        let random = Math.floor(Math.random()*hexNums.length);
        hexColour+=hexNums[random];
    }
    body.style.backgroundColor = hexColour;
    hex.innerHTML = hexColour;
}