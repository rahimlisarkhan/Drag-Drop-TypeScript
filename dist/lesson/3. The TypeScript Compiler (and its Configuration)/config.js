"use strict";
const userName = 'Maximisddlian';
let button = document.querySelector('#roll');
let saveBtn = document.querySelector('#save');
let panelRoll = document.querySelector('#panelRoll');
let panelSave = document.querySelector('#panelSave');
let panelWinner = document.querySelector('#panelWinner');
let totalPoint;
let savePoint;
totalPoint = 0;
savePoint = 0;
button.addEventListener('click', () => {
    let randomNum = Math.round(Math.random() * 5);
    if (randomNum === 1) {
        totalPoint = 0;
        panelRoll.innerHTML = `Roll point ${totalPoint}`;
    }
    else {
        totalPoint += 5;
        panelRoll.innerHTML = `Roll point ${totalPoint}`;
    }
});
saveBtn.addEventListener('click', () => {
    savePoint += totalPoint;
    panelSave.innerHTML = `Save point ${savePoint}`;
    if (savePoint >= 100) {
        panelWinner.style.display = 'block';
    }
});
