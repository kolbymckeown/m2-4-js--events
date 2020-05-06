// Exercise 1.1
// ------------
// Write an app that gives the user 1s (or 1000ms) to click anywhere on the screen.
//
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// Hints:
// - Target the <body>
// - setTimout is your friend.
// - You'll need a variable to keep track of whether the user has won or lost

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------

const body = document.querySelector('body');
const result = document.querySelector('.result');

body.addEventListener('click', clickEvent);

let response = false;

function clickEvent() {
    response = true;
    result.innerText = 'You have won!';
    body.removeEventListener('click', clickEvent);
}

setTimeout(function() {
    if (!response) {
        result.innerText = 'You have lost! Got to be faster!';
        body.removeEventListener('click', clickEvent);
    }
}, 1000);



