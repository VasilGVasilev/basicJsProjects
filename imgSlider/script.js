const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const container = document.querySelector('.images');

let counter = 0;

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);


function nextSlide(){
    container.animate([{opacity:'0.3'},{opacity:'1.0'}], {duration:500, fill:'forwards'})

    if (counter === 4){
        counter = -1;
    }
    counter++;
    container.style.backgroundImage = `url(img/img-${counter}.jpg)`

}

function prevSlide(){
    container.animate([{opacity:'0.3'},{opacity:'1.0'}], {duration:500, fill:'forwards'})
    
    counter--;
    if (counter === -1){
        counter = 4;
    }
    container.style.backgroundImage = `url(img/img-${counter}.jpg)`
}