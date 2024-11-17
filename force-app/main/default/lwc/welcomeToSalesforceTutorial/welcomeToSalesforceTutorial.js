import { LightningElement,track } from 'lwc';

export default class WelcomeToSalesforceTutorial extends LightningElement {
    greeting = 'Hello';
   @track welcome = 'Manoj Salesforce Tutorial';

   clickHandler(event)
   {
    this.greeting = 'Hello Manoj';
    this.welcome = 'Today is Day 1 of Salesforce Tutorial';
   }
}