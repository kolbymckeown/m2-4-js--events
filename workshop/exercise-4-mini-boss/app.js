const body = document.querySelector('body');
const gameArea = document.getElementById('gameArea');
const timer = document.getElementById('timer');
const startButton = document.getElementById('startButton')
const winPopUp = document.getElementById('winPopUp');
const losePopUp = document.getElementById('losePopUp');

// # of buttons
const buttons = Math.floor(Math.random() * 10) + 1;
// console.log(buttons);
// Set game time
const gameTime = 8000; // 8 Seconds total game time to hit between 1-15 buttons

const clickedBtns = [];

function checkClicked(arr) {
    return arr.every(function (item) {
        return item;
    });
}

startButton.addEventListener('click', gameTimer);

function gameTimer() {
    startButton.style.display = 'none';
    document.getElementById('timer').innerText = gameTime / 1000;
    let i = 8; 
    myVar = setInterval(function() {
        i--;
        timer.innerText = i;
        if (i === 0) {
            clearInterval(myVar)
            checkWin(clickedBtns);
        }       
    }, 1000)
    btnElems = document.getElementsByClassName('gameButtons');
    for (let j = 0; j <= btnElems.length-1; j++) {
        console.log(btnElems[j])
        btnElems[j].style.display = 'inline-block'
    }
}

function checkWin(clickedBtns) {
    console.log(clickedBtns)
    if (clickedBtns.length !== buttons && timer.innerText === '0') {
        losePopUp.style.display = 'inline-block'
    } else if (clickedBtns.length === buttons) { 
        winPopUp.style.display = 'inline-block'
        clearInterval(myVar);
    }
}


// Displays between 1 - 11 buttons to toggle to green
for (let i = 1; i <= buttons; i++) {
    let btn = document.createElement('button');
    btn.id = `btn-${i}`;
    btn.className = 'gameButtons';
    btn.style.top = `${Math.random() * 80}%`
    btn.style.left = `${Math.random() * 80}%`
    btn.innerText = `${i}`
    gameArea.appendChild(btn);
    btn.addEventListener('click', colorChange);   
}

function colorChange(event) {
    let btnId = event.target.id;
    document.getElementById(btnId).classList.toggle('green');   
    clickedBtns.push(btnId);
    console.log(clickedBtns);
    checkWin(clickedBtns);
}




