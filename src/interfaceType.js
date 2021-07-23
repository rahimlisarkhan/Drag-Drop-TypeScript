"use strict";
//  Advanced Types Lesson 1 
// type Employe = {
//     name: string;
//     age: number;
// }
function add1(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add1('Max', 'Schwarz');
const animalSpeed = (animal) => {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flySpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
        case 'lion':
            speed = animal.lionSpeed;
            break;
        default:
            speed = 0;
    }
    console.log('Move speed ' + speed);
};
animalSpeed({
    type: 'lion',
    lionSpeed: 85
});
const element = document.querySelector('#panelRoll');
element.innerHTML = 'Hi';
const errorBag = {
    email: 'test',
    username: 'test',
};
