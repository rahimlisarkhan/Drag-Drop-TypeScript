"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Auto bind decorator
function autobind(_, _2, descriptor) {
    // const originalMethod = descriptor.value
    // const adjDescriptor: PropertyDescriptor = {
    //     get(){
    //         const boundFn = originalMethod.bind(this)
    //         return boundFn;
    //     }
    // }
    // return adjDescriptor;
    return {
        get() {
            return descriptor.value.bind(this);
        }
    };
}
//Project Input Class
class ProjectInput {
    constructor() {
        this.templateEl = document.querySelector('#project-input');
        this.hostEl = document.querySelector('#app');
        const importNode = document.importNode(this.templateEl.content, true);
        this.elementForm = importNode.firstElementChild;
        this.elementForm.id = 'user-input';
        this.titleElInput = this.elementForm.querySelector('#title');
        this.descElInput = this.elementForm.querySelector('#description');
        this.peopleElInput = this.elementForm.querySelector('#people');
        this.configure();
        this.attach();
    }
    getherUserInput() {
        if (this.titleElInput.value.trim().length === 0 ||
            this.descElInput.value.trim().length === 0 ||
            this.peopleElInput.value.trim().length === 0) {
            alert('Invalid value,Please try again');
        }
        else {
            return [
                this.titleElInput.value,
                this.descElInput.value,
                +this.peopleElInput.value
            ];
        }
    }
    clearInput() {
        this.titleElInput.value = '',
            this.descElInput.value = '',
            this.peopleElInput.value = '';
    }
    submitHandler(event) {
        event.preventDefault();
        const userInput = this.getherUserInput();
        if (Array.isArray(userInput)) {
            const [name, desc, people] = userInput;
            console.log(name, desc, people);
            this.clearInput();
        }
    }
    configure() {
        this.elementForm.addEventListener('submit', this.submitHandler);
    }
    attach() {
        this.hostEl.insertAdjacentElement('afterbegin', this.elementForm);
    }
}
__decorate([
    autobind
], ProjectInput.prototype, "submitHandler", null);
const prjInput = new ProjectInput();
console.log(prjInput);
