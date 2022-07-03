const quotes = [
    {
        name: 'Michael Jackson',
        quote: 'In a world filled with hate, we must still dare to hope.'
    },
    {
        name: 'Albus Dumbledore',
        quote: 'Words are, in my not-so-humble opinion, our most inexhaustible source of magic.'
    },
    {
        name: 'Jordan Peterson',
        quote: 'You can only find out what you actually believe (rather than what you think you believe) by watching how you act.'
    },
    {
        name: 'Carl Jung',
        quote: 'The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed.'
    },
    {
        name: 'Machiavelli',
        quote: 'If an injury has to be done to a man it should be so severe that his vengeance need not be feared.'
    }
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');


quoteBtn.addEventListener('click', displayQuote);

function displayQuote(){
    let random = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[random].name;
    quote.innerHTML = quotes[random].quote;
}