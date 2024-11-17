import { getObjectInfo, getObjectInfos } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
export default class GetObjectInfoDemo extends LightningElement {
    accountInfo;
    accountError;
    @wire(getObjectInfos,{
        objectApiNames : [ACCOUNT_OBJECT,CONTACT_OBJECT]
    })
    outputFunction({data,error}){
        if(data){
            console.log('Account Info Data', data);
            this.accountInfo = data;
            this.accountError = null;
        } else if(error){
            console.log('Account Info Error', error);
            this.accountError = error;
            this.accountInfo = null;
        }
    }
}