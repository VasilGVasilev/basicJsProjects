const navbarBtn = document.querySelector('.navbar__btn');
const navbarLinks = document.querySelector('.navbar__links');

// Node interface
// logic is to make the actual links be behind background img
// onclick adds navbar__collapse block to be added to links Node in DOM
// push down the bcg img and make the links apparent
navbarBtn.addEventListener('click', function (){
    let value = navbarLinks.classList.contains('navbar__collapse');
    
    if(value){
        navbarLinks.classList.remove('navbar__collapse');
        navbarBtn.classList.remove('change');
    } else {
        navbarLinks.classList.add('navbar__collapse');
        navbarBtn.classList.add('change');
    }
})

