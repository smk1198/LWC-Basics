import { LightningElement, wire } from 'lwc';
import {subscribe,unsubscribe,APPLICATION_SCOPE,MessageContext,} from 'lightning/messageService';
import recordSelected from '@salesforce/messageChannel/sendMessage__c';

export default class SubscribeLMS extends LightningElement {
    subscription = null;
    pubMessage="";

    @wire(MessageContext)
    messageContext;

    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                recordSelected,
                (message) => this.handleMessage(message),
                { scope: APPLICATION_SCOPE }
            );
        }
    }

    handleMessage(message) {
        this.pubMessage = message.LMSData;
    }


    connectedCallback() {
        this.subscribeToMessageChannel();
    }

    disconnectedCallback() {
        this.unsubscribeToMessageChannel();
    }

    unsubscribeToMessageChannel() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }
}