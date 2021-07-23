// function Login (login:string) {

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


function writeText<T extends string>(template: T, hookID: T) {

    return function<T extends {new(...args:any[]):{name:string}} > (originalConstructor:T ) {

        return class extends originalConstructor {
            constructor(..._:any[]) { 
                super();
                let hookEl = document.querySelector(hookID)
                let hookParg = document.querySelector('h2')


                if (hookEl && hookParg) {
                    hookEl.innerHTML = template
                    hookParg.innerHTML = this.name
                }
            }
        }
    }
}



@writeText('Welcome User Back', 'h1')
class personUser {
    name: string = 'Max';
    age: number = 4;

    constructor() {
        console.log('userCreated');
    }
}
