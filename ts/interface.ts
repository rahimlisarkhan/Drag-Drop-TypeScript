// ------INTERFACE LESSON 1 ------
// interface Teacher {
//     name: string;
//     lastName: string[];
//     articles: object[];
//     old: boolean;
//     age: number;

//     getStart(text: string, note: number[]): void
// }



// let person1: Teacher

// person1 = {
//     name: 'Omer',
//     lastName: ['Pasa', 'Pasayev'],
//     articles: [{ 'title': 'Text1' }, { 'title': 'Text2' }, { 'title': 'Text3' }],
//     old: false,
//     age: 4,

//     getStart(text: string, note: number[]) {
//         console.log(text + '' + this.name + '' + this.age + note[2]);
//     }
// }   


// person1.getStart('My name is ', [1, 4, 6, 8])




// ------INTERFACE LESSON 2 ------

interface Named {
    readonly name: string;

}

interface Aged {
    readonly age: number;
    position?:string;
}


interface Teacher extends Named, Aged {
    // public private

    getStart(text: string): void
}


    
class Person implements Teacher {
    name: string;
    age: number;
    education?:string

    constructor(name: string, age: number, edu?:string) {
        this.name = name;
        this.age = age
        this.education = edu
    }

    getStart(text: string) {
        console.log(text + '' + this.name + '' + this.age);
    }
}

let person1: Teacher
person1 = new Person('Fuad', 23)

// person1.name = 'Sarkhan'; 
person1.getStart('I am')



// ------INTERFACE LESSON 3 ------

// type AddFn = (a:number,b:number) => number
interface AddFn{
    (a:number,b:number,c:string) : number
}

let add: AddFn

add = (n1:number,n2:number,text:string) => {
    console.log(n1 + n2 + text);
    return n1 + n2
    
}
  

let test1 =  add(2,4,'test');

console.log(test1);
