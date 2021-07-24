"use strict";
// function Login (login:string) {
const registeredValidators = {};
function Required(target, propName) {
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: ['required'] });
}
function PositiveNumber(target, propName) {
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: ['positive'] });
}
function validate(obj) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    for (const prop in objValidatorConfig) {
        for (const validator in objValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    return !!obj[prop];
                case 'positive':
                    return obj[prop] > 0;
            }
        }
    }
}
class Course {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
let form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    let titleEl = document.querySelector('#title');
    let priceEl = document.querySelector('#price');
    const createdCourse = new Course(titleEl.value, +priceEl.value);
    if (!validate(createdCourse)) {
        alert('Invalid input,please try again');
        return;
    }
    console.log(createdCourse);
});
