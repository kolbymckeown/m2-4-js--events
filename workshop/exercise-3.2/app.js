// this time clicking on a green button should turn it back to red.

let main = document.querySelector('main');

for (let i = 1; i <= 20; i++) {
    let btn = document.createElement('button');
    btn.id = `btn-${i}`;
    main.appendChild(btn);

    btn.addEventListener('click', colorChange);
}

function colorChange(event) {
    let id = event.target.id;
    document.getElementById(id).classList.toggle('green');
}