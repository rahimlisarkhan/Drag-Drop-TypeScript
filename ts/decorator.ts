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


// function writeText<T extends string>(template: T, hookID: T) {

//     return function<T extends {new(...args:any[]):{name:string}} > (originalConstructor:T ) {

//         return class extends originalConstructor {
//             constructor(..._:any[]) { 
//                 super();
//                 let hookEl = document.querySelector(hookID)
//                 let hookParg = document.querySelector('h2')

//                 if (hookEl && hookParg) {
//                     hookEl.innerHTML = template
//                     hookParg.innerHTML = this.name
//                 }
//             }
//         }
//     }
// }



// @writeText('Welcome User Back', 'h1')
// class personUser {
//     name: string = 'Max';
//     age: number = 4;

//     constructor() {
//         console.log('userCreated');
//     }
// }


// function Autobind(target:any,methodName:string,description:PropertyDescriptor){
//     const originalMethod = description.value;

//     const adjDescriptor:PropertyDescriptor = {
//         configurable:true,
//         enumerable:false,

//         get(){
//             const boundFn = originalMethod.bind(this)
//             return boundFn;
//         }
//     };
//     return adjDescriptor;
// }




// class Printer {
//     message: string = 'This is work';

//     @Autobind
//     showMessage(){
//         console.log(this.message);
//     }
// }

// let btn = document.querySelector('#save')!;

// let p = new Printer()

// btn.addEventListener('click',p.showMessage)

interface ValidatorConfig {
    [property: string]: {
        [validatableProp: string]: string[]  //['required,'positive']
    }
}

const registeredValidators: ValidatorConfig = {}




function Required(target: any, propName: string) {

    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['required']
    };
}


function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['positive']
    };
}
function validate(obj: any) {

    const objValidatorConfig = registeredValidators[obj.constructor.name]

    if (!objValidatorConfig) {
        return true;
    }

    for (const prop in objValidatorConfig) {
        for (const validator in objValidatorConfig[prop]) {

            switch (validator) {
                case 'required':
                    return !!obj[prop]
                case 'positive':
                    return obj[prop] > 0
            }
        }
    }
}


class Course {

    title: string;
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }

}


let form = document.querySelector('form')!


form.addEventListener('submit', e => {
    e.preventDefault();

    let titleEl = document.querySelector('#title') as HTMLInputElement;
    let priceEl = document.querySelector('#price') as HTMLInputElement;


    const createdCourse = new Course(titleEl.value, +priceEl.value)

    if (!validate(createdCourse)) {
        alert('Invalid input,please try again')
        return
    }
    console.log(createdCourse);

})






