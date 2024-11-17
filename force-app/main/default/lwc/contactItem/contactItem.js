import { LightningElement, api } from 'lwc';

export default class ContactItem extends LightningElement {
    @api contact;

    clickHandler(event){
        //prevent the anchor element from navigation
        event.preventDefault();

        const selectionevent = new CustomEvent("selection", {
            detail : this.contact.Id
        });

        this.dispatchEvent(selectionevent);
    }
}