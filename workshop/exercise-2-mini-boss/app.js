// Shows Current Time
setInterval(function currentTime() {
    let d = new Date();
    let n = d.toLocaleTimeString();
    document.getElementById('time').innerHTML = n;
}, 1000);


// Stopwatch Functions
let x = 0;
let myVar = setInterval(printTime, 1000)
let pageReady = false;

function printTime() {
    if (pageReady) {
        x++;
        document.getElementById('stopwatch').innerHTML = x;
    } else {
        clearInterval(myVar);
    }
}

function start() {
    pageReady = true;
    myVar = setInterval(printTime, 1000) 
}

function stop() {
    clearInterval(myVar);
    document.getElementById('stopwatch').innerHTML = x;
}

function reset() {
    x = 0
    document.getElementById('stopwatch').innerHTML = x;
}  

// Timer Countdown

// document.getElementById('timerStart').addEventListener('click', function() {
//     console.log('5');
//     let timer = setInterval(input, 1000)
// });

// let input = document.getElementById('input').value;


function startCountdown() {
    let counter = `${document.getElementById('input').value}`;
    
    let countdown = setInterval(function() {
        counter--;
        document.getElementById('timeArea').innerHTML = counter;
        
        
        if (counter === 0) {
            document.getElementById('audio').play();
            clearInterval(countdown);
        }
    }, 1000)
}

// instead of console.log, output the countdown to the id="timeArea" that is preset at 0









