//  Advanced Types Lesson 1 
// type Employe = {
//     name: string;
//     age: number;
// }

// type Admin = {
//     date: Date;
// }


// type User = Employe & Admin
// interface User extends Employe, Admin { }



//  Advanced Types Lesson 2
// const profile: User = {
//     name: 'Fuad',
//     age: 23,
//     date: new Date(),
// }

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric

function add1(a: number, b: number):number; 
function add1(a: string, b: string):string; 
function add1(a: Combinable, b: Combinable) {

    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b
}


const result = add1('Max','Schwarz')

//  Advanced Types Lesson 3
// type UnknownEmploye = Employe | Admin

// function PrintEmployeInfo(emp: UnknownEmploye) {

//     if ('name' in emp) {
//         console.log(emp.name);
//     }
//     // console.log(emp.date);
//     // console.log(emp.age);

// }

// PrintEmployeInfo({name:'Manu',date:new Date(),age:45})



//  Advanced Types Lesson 4
// class Car {
//     drive() {
//         console.log('Driving a truck');
//     }
// }

// class Truck {
//     loadCargo(amount: number) {
//         console.log('Truck price' + amount);
//     }
// }


// type Vehicle = Car | Truck

// const v1 = new Truck()


// function printVehicle(veh: Vehicle) {
//     // veh.drive()
//     if (veh instanceof Truck) {
//         veh.loadCargo(1000)
//     }
// }   

// printVehicle(v1)


//Advanced Types Lesson 5
interface Bird {
    type: 'bird';
    flySpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

interface Lion {
    type: 'lion'
    lionSpeed: number;
}

type Animal = Horse | Bird | Lion

const animalSpeed = (animal: Animal) => {

    let speed
    switch (animal.type) {
        case 'bird':
            speed = animal.flySpeed
            break
        case 'horse':
            speed = animal.runningSpeed
            break
        case 'lion':
            speed = animal.lionSpeed
            break
        default:
            speed = 0
    }
    console.log('Move speed ' + speed);

}


animalSpeed(
    {       
        type: 'lion',
        lionSpeed: 85
    }
)
const element = document.querySelector('#panelRoll') as any

element.innerHTML = 'Hi'


interface ErrorContainer {
    [prop:string]: string
}

const errorBag : ErrorContainer={
    email:'test',
    username:'test', 
}
