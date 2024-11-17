import { LightningElement,track } from 'lwc';

export default class NestedObjectPrivateProperty extends LightningElement {
   //@track myDetails = {fname :'Manoj',lname : 'Kumar'};
   myDetails = {fname :'Manoj',lname : 'Kumar'};
   //@track myTask = ['Office','Meeting','Bootcamp'];
   myTask = ['Office','Meeting','Bootcamp'];

    clickHandler(event)
    {
        this.myDetails.fname = 'Manu';
    }

    addTaskHandler(event)
    {
        this.myTask.push('Self Study');
    }

    refreshHandler(event)
    {
        this.myDetails = {fname:'Sai',lname:'Kumar'};
        this.myTask = [... this.myTask,'Self Study'];
    }
}