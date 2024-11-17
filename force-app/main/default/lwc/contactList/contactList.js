import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';
import { publish, MessageContext } from 'lightning/messageService';
import recordSelected from '@salesforce/messageChannel/sendContact__c';

export default class ContactList extends LightningElement {

    @wire(getContactList) contacts;
    @wire(MessageContext)
    messageContext;
    selectedcontact;
    selectionHandler(event){
        let selectedContactId = event.detail;

        this.selectedcontact = this.contacts.data.find(curritem =>  curritem.Id === selectedContactId);
        const payload = { LMSData: this.selectedcontact };

        publish(this.messageContext, recordSelected, payload);
    }

}