"use strict";
//Sprint 4
// console.log('ds');
// const add = (...numbers:[number,number,number,number])=>{
//    return numbers.reduce((sum,value) => sum+value)
// }
//  console.log(
//   add(2,5,6,8.5))
// Sprint 5
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // name:string
        this.employees = [];
        // this.id = id
        // this.na  me = name
    }
    get mostView() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No found report");
    }
    set mostView(value) {
        if (!value) {
            throw new Error('Please pass in a valid value');
        }
    }
    describe() {
        console.log(`Departament id: ${this.id} name:${this.name}`);
    }
    addEmployee(employee) {
        // this.id=5
        this.employees.push(employee);
        this.lastReport = employee;
    }
    printEmployeeinfo() {
        // console.log(this.employees.length);
        console.log(this.lastReport);
    }
}
const persoID = Math.round(Math.random() * 100) + 1;
const accountin = new Department(persoID, 'Sarkhan');
// accountin.addEmployee('max')
// console.log(accountin.mostView);
accountin.addEmployee('Max');
// accountin.addEmployee('Sarkhan')
accountin.printEmployeeinfo();
// accountin.describe()
// const copyAcountin = {name:'Dummy',describe : accountin.describe}
// copyAcountin.describe()
// console.log(accountin);
const it = new Department(15, 'Aygun');
it.describe();
