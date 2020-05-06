// Exercise 1.2
// ------------
// DON'T COPY/PASTE THE LAST EXERCISE. REWRITE IT FROM SCRATCH!
// Similar to the last exercise, write an app that gives the user
// a random amount of time (between 3 and 5 seconds) to click anywhere on the
// screen.
//
// But this time, let's let the user know how much time they have to actually
// 'click'. If they click inside of the required time, you should tell them
// that they've won, else let them know that they've lost.

// In short,
// Replicate (and I mean, REWRITE it from scratch) the last exercise, and add
// - random amount of time to click (between 3 and 5 seconds)
// - tell the user how much time they have to click.

// HINTS:
// - You can use Math.random to generate a random number betwen 0 and 1, and
//   use math operators to scale it between 3 and 5 seconds

// Stretch goal
// Make the countdown live (show a countdown that updates several times a
// second)


const body = document.querySelector('body');
const result = document.querySelector('.result');


let response = false;

body.addEventListener('click', clickEvent);

function clickEvent() {
    response = true;
    result.innerText = 'Win!';

    body.removeEventListener('click', clickEvent);
}


// Math.floor(Math.random() * (5 - 3 + 1) + 3) * 1000)



// make the time random between 3 and 5
let totalTime = document.getElementById('time');
totalTime.innerText = `${randomNumber() / 1000} ` 


//  ************ How to make sure my randomNumber is the same
//  displaying as it is for the setTimeout function *****

function randomNumber() {
    let x = (Math.floor(Math.random() * (5 - 3 + 1) + 3) * 1000);
    console.log(x);
    setTimeout(function() {
        if (!response) {
            result.innerText = 'Lose!';
            body.removeEventListener('click', clickEvent);
        }
    }, x)
    return x;
}
