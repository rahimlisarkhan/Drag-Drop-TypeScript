//Auto bind decorator
function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {

    // const originalMethod = descriptor.value
    // const adjDescriptor: PropertyDescriptor = {
    //     get(){
    //         const boundFn = originalMethod.bind(this)
    //         return boundFn;
    //     }
    // }
    // return adjDescriptor;

    return <PropertyDescriptor>{
        get() {
            return descriptor.value.bind(this)
        }
    }
}

//Project Input Class
class ProjectInput {

    templateEl: HTMLTemplateElement;
    hostEl: HTMLDivElement;
    elementForm: HTMLFormElement;
    titleElInput: HTMLInputElement;
    descElInput: HTMLInputElement;
    peopleElInput: HTMLInputElement;


    constructor() {
        this.templateEl = <HTMLTemplateElement>document.querySelector('#project-input');
        this.hostEl = <HTMLDivElement>document.querySelector('#app');
        const importNode = document.importNode(this.templateEl.content, true)
        this.elementForm = <HTMLFormElement>importNode.firstElementChild;
        this.elementForm.id = 'user-input'

        this.titleElInput = <HTMLInputElement>this.elementForm.querySelector('#title');
        this.descElInput = <HTMLInputElement>this.elementForm.querySelector('#description');
        this.peopleElInput = <HTMLInputElement>this.elementForm.querySelector('#people');

        this.configure()
        this.attach()
    }

    private getherUserInput(): [string, string, number] | void {

        if (
            this.titleElInput.value.trim().length === 0 ||
            this.descElInput.value.trim().length === 0 ||
            this.peopleElInput.value.trim().length === 0
        ) {
            alert('Invalid value,Please try again')
        } else {
            return [
                this.titleElInput.value,
                this.descElInput.value,
                +this.peopleElInput.value
            ]
        }

    }

    private clearInput(){
        this.titleElInput.value='',
        this.descElInput.value='',
        this.peopleElInput.value=''
    }

    @autobind
    private submitHandler(event: Event) {
        event.preventDefault();
        const userInput = this.getherUserInput()

        if (Array.isArray(userInput)) {
            const [name,desc,people] = userInput
            console.log(name, desc,people);
            this.clearInput()
        }
    }

    private configure() {
        this.elementForm.addEventListener('submit', this.submitHandler)
    }

    private attach() {
        this.hostEl.insertAdjacentElement('afterbegin', this.elementForm)
    }
}


const prjInput = new ProjectInput()
console.log(prjInput);

