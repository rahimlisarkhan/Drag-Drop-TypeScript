"use strict";
// function Login (login:string) {
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//     return function (constructor:Function) {
//         console.log(login);
//         console.log(constructor);
//     }
// }
// @Login('PERSON-LOGIN')
// class Pers{
//     name:string = 'Max';
//     constructor(){
//         console.log('Person Created....');
//     }
// }
// let pers = new Pers()
// // console.log(pers);
//Lesson 2 Decorator
//decorator
// function writeText<T extends string>(template: T, hookID: T) {
//     return function (constructor: any) {
//         let hookEl = document.querySelector(hookID)
//         let hookParg = document.querySelector('h2')
//         let info = new constructor()
//         if (hookEl && hookParg) {
//             hookEl.innerHTML = template
//             hookParg.innerHTML = info.name
//         }
//     }
// }
// @writeText('Welcome User Back','h1')
// class personUser {
//     name: string = 'Max';
//     age: number = 4;
//     constructor() {
//         console.log('userCreated');
//     }
// }
// function Log(target:any,prName:string | Symbol){
//     console.log('Propety decorator');
//     // return function(constructor:any){
//     //     console.log(constructor());
//     // }
//     console.log(target,prName);
// }
// class Product {
//     title: string;
//     private _price: number;
//     constructor(t: string, p: number) {
//         this.title = t;
//         this._price = p
//     }
//     set Price(val: number) {
//         if (val > 0) {
//             this._price = val
//         }
//         else {
//             throw new Error('Error value')
//         }
//     }
//     @Log
//     getPriceWithtax(tax:number){
//         return this._price * (1 + tax)
//     }
// }
// Lesson 5 
//decorator
function writeText(template, hookID) {
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super();
                let hookEl = document.querySelector(hookID);
                let hookParg = document.querySelector('h2');
                if (hookEl && hookParg) {
                    hookEl.innerHTML = template;
                    hookParg.innerHTML = this.name;
                }
            }
        };
    };
}
let personUser = class personUser {
    constructor() {
        this.name = 'Max';
        this.age = 4;
        console.log('userCreated');
    }
};
personUser = __decorate([
    writeText('Welcome User Back', 'h1')
], personUser);
