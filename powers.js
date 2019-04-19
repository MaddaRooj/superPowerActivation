console.log('Hello, World!');

document.querySelector("#activate-flight").addEventListener('click', allInOne);
document.querySelector("#activate-mindreading").addEventListener('click', allInOne);
document.querySelector("#activate-xray").addEventListener('click', allInOne);
document.querySelector("#activate-all").addEventListener('click', enableHandlerFunction);
document.querySelector("#deactivate-all").addEventListener('click', disableHandlerFunction);

function allInOne(object) {
    console.log('object', object);
    console.log('object target', object.target);
    let x = object.target.id.split('-');
    console.log('x', x);
    x.forEach(item => {
        console.log('item', item);
        console.log('x1', x[1]);
        if (x[1] == item) {
            let y = document.getElementsByClassName('power');
            y[item].classList.toggle('enabled');
            console.log('y[item]', y[item]);
        }
    })
}

function enableHandlerFunction(item) {
    let all = document.querySelectorAll('.power');
    console.log(all);
    all.forEach(item => {
        item.classList.add('enabled');
    })
}
function disableHandlerFunction(item) {
    let none = document.querySelectorAll('.power');
    console.log(none);
    none.forEach(item => {
        item.classList.remove('enabled');
    })
}

// function flightHandlerFunction() {
//     let flight = document.getElementById('flight');
//     console.log(flight);
//     flight.classList.toggle('disabled');
//     flight.classList.toggle('enabled');
// }
// function mindHandlerFunction() {
//     let mind = document.getElementById('mindreading');
//     console.log(mind);
//     mind.classList.toggle('disabled');
//     mind.classList.toggle('enabled');
// }
// function xrayHandlerFunction() {
//     let xray = document.getElementById('xray');
//     console.log(xray);
//     xray.classList.toggle('disabled');
//     xray.classList.toggle('enabled');
// }