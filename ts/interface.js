"use strict";
// ------INTERFACE LESSON 1 ------
// interface Teacher {
//     name: string;
//     lastName: string[];
//     articles: object[];
//     old: boolean;
//     age: number;
class Person {
    constructor(name, age, edu) {
        this.name = name;
        this.age = age;
        this.education = edu;
    }
    getStart(text) {
        console.log(text + '' + this.name + '' + this.age);
    }
}
let person1;
person1 = new Person('Fuad', 23);
// person1.name = 'Sarkhan'; 
person1.getStart('I am');
let add;
add = (n1, n2, text) => {
    console.log(n1 + n2 + text);
    return n1 + n2;
};
let test1 = add(2, 4, 'test');
console.log(test1);
