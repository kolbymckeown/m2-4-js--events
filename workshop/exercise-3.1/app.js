// Write an app that generates 20 red buttons.
// When the user clicks a button it should become green.
// I leave the design up to you (maybe consider putting them in a grid?)

let body = document.querySelector('body');

for (let i = 1; i <= 20; i++) {
    let x = document.createElement('button');
    x.id = `btn-${i}`
    body.appendChild(x);

    x.addEventListener('click', green);
}

function green(event) {
    let id = event.target.id;
    document.getElementById(id).classList.add('green');
}




