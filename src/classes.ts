//Sprint 4
// console.log('ds');


// const add = (...numbers:[number,number,number,number])=>{

//    return numbers.reduce((sum,value) => sum+value)
// }


//  console.log(
//   add(2,5,6,8.5))

// Sprint 5
class Department{
    // name:string
    protected employees:string[] = []
    // private lastReport:string ;

    constructor(private readonly id: number, public name:string){
        // this.id = id
        // this.na  me = name
    }

    // get mostView(){
    //     if(this.lastReport){
    //         return this.lastReport
    //     }
    //     throw new Error("No found report");
        
    // }

    set mostView(value:string){
        if(!value){
            throw new Error('Please pass in a valid value')
        }
    }
    
    describe(this:Department){
        console.log(`Departament id: ${this.id} name:${this.name}`);
    }

    addEmployee(employee:string){
        // this.id=5
        this.employees.push(employee);
        // this.lastReport = employee       
    }

    // printEmployeeinfo(){
    //     // console.log(this.employees.length);
    //     console.log(this.lastReport);
    // }
}

const persoID = Math.round(Math.random()*100) + 1

const accountin = new Department(persoID,'Sarkhan')

// accountin.addEmployee('max')
// console.log(accountin.mostView);

accountin.addEmployee('Max')
// accountin.addEmployee('Sarkhan')

// accountin.printEmployeeinfo()

// accountin.describe()

// const copyAcountin = {name:'Dummy',describe : accountin.describe}

// copyAcountin.describe()
// console.log(accountin);

const it = new Department(15,'Aygun')

it.describe()



class ITDepartment extends Department{
    admins:string[];

    constructor(id:string, admins:string[]){
        super(45,'IT');
        this.admins = admins
    }


}


const test =  new ITDepartment('Dummy',['test'])

test.addEmployee('test')
// test.printEmployeeinfo()