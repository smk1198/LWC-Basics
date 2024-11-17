import { LightningElement,api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api display;
    @api displayGreeting;
    displayuser;
    //@api user;
    @api isUserAvailable = false;

    set user(value){
        let cloneuser = {...value};
        this.displayuser = cloneuser.channel.toUpperCase();
    }

    @api
    get user(){
        return this.displayuser;
    }
}