const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('.messageOut');

sendBtn.addEventListener('click', sendMsg)

function sendMsg(){
    let content = messageIn.value;
    if (content === ''){
        alert('Please Enter Valid Value')
    } else {
        messageOut.innerHTML = content;
        // to restart empty input context after using button
        messageIn.value = '';
    }

}
