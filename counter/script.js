const counter = document.querySelector('.counter');
const lowerCount = document.querySelector('#lowerCountBtn');
const addCount = document.querySelector('#addCountBtn');

let count = 0;

addCount.addEventListener('click', incrementCounter);
lowerCount.addEventListener('click', decrementCounter);

function incrementCounter(){
    count++;
    counter.innerHTML = count;
    if (count > 0){
        counter.style.color = '#4caf50'
    } else if (count === 0){
        counter.style.color = 'white';
    } else {
        counter.style.color = 'red'
    }
    counter.animate([{opacity:'0.2'}, {opacity: '1.0'}],{duration:500, fill:'forwards'})
}

function decrementCounter(){
    count--;
    counter.innerHTML = count;
    if (count < 0){
        counter.style.color = 'red'
    } else if (count === 0){
        counter.style.color = 'white';
    } else {
        counter.style.color = '#4caf50'
    }
    counter.animate([{opacity:'0.2'}, {opacity: '1.0'}],{duration:500, fill:'forwards'})
}