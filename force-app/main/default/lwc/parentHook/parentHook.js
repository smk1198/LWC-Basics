import { LightningElement } from 'lwc';

export default class ParentHook extends LightningElement {
    displayChild = false;
    constructor(){
        super();
        console.log('Constructor from Parent');
    }

    connectedCallback(){
        console.log('connectedCallback from Parent');
    }
    renderedCallback(){
        console.log('renderedCallback from Parent');
    }
    errorCallback(error,stack){
        console.log('errorCallback from Parent');
        console.log('Error : ', error.message);
        console.log('Stack : ', stack);

    }
    disconnectedCallback(){
        console.log('disconnectedCallback from Parent');
    }
    changeHandler(event){
        this.displayChild = event.target.checked;
    }
}