// select els
const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');



// looping through each btn awaiting the 'click' of an eventListener
// btns is a nodeList 
for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', () => {
        let selectedBtn = btns[i].getAttribute('data-num');
        screen.value+=selectedBtn;
    })
}

equalBtn.addEventListener('click', function(){
    if (screen.value === ''){
        alert('Please, eneter valid value.')
    } else {
        let value = eval(screen.value);
        screen.value = value;
    }
    
})

clearBtn.addEventListener('click', ()=>{
    screen.value = '';
})