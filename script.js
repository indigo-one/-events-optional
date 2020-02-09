"use strict";

let one = document.querySelector('#one');
one.onclick = myClick;

function myClick() {
 one.style.backgroundColor = 'red';
 console.log('click');
 let two = document.querySelector('#two');
 two.onclick = myClick2;
}

function myClick2() {
    two.style.backgroundColor = 'red';
    let three = document.querySelector('#three');
 three.onclick = myClick3;
}

function myClick3() {
    one.style.backgroundColor = 'yellow';
}