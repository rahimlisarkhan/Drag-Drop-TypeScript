"use strict";
// //Gneric  types
// //1
// const names: Array<string> = [] // string[]
// // names[0].split(' ');
// //2
// const promise:Promise<any> = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve('Done')
//     },2000)
// })
// promise.then(data => data.split(' ')).then(data => console.log(data))
// function merge<T extends object, U extends object>(objA: T, objB: U) {
//     return Object.assign(objA   , objB);
// }
// const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 })
// console.log(mergedObj);
// interface Length{
//     length: number;
// }
// function lengthWords<T extends Length>(element:T):[T,string]{
//     let descText = 'total element count'
//     if(element.length === 1){
//         descText = '1 total element count'
//     }else if (element.length > 1 ){
//         descText =element.length + ` total element count`
//     }
//     return [element,descText]  
// }
// console.log(lengthWords(['dsds','dsds']))
// const convertObject = <T extends object,U extends keyof T > (obj:T,key:U) => {
//     return 'Value' +  obj[key];
// }
// console.log(convertObject({name:'Max'},'name'));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItems(item) {
        this.data.push(item);
    }
    removeItems(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItem() {
        return [...this.data];
    }
}
const textStore = new DataStorage();
textStore.addItems('Max');
textStore.addItems('Manu');
textStore.addItems('Ser');
textStore.removeItems('Max');
const text = 'Test';
console.log(textStore.getItem());
