import { LightningElement } from 'lwc';

export default class GrandParentComposition extends LightningElement {

    fireChildHandler(){
        console.log('Event Handled in Grand Parent Component - At Child Level');
    }
}