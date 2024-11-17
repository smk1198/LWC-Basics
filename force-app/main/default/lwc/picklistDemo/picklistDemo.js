import { getPicklistValues, getObjectInfo, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import { LightningElement,wire } from 'lwc';
import ACCOUNT_INDUSTRY from '@salesforce/schema/Account.Industry';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class PicklistDemo extends LightningElement {
    value;
    @wire(getObjectInfo,
        {
        objectApiname : ACCOUNT_OBJECT 
    }
)
accountInfo;

    @wire(getPicklistValues, {
        recordTypeId : "$accountInfo.data.defaultRecordTypeId",
        fieldApiName : ACCOUNT_INDUSTRY
    })
    industryPicklist;
    /*industryPicklist({data,error})
    {
        if(data)
        {
            console.log('Industry Picklist', data);
        }
        else if(error)
        {
            console.log('Industry Error', error);
        }
    }*/
   @wire(getPicklistValuesByRecordType, {
    objectApiname : ACCOUNT_OBJECT,
    recordTypeId : "$accountInfo.data.defaultRecordTypeId"
   })
   accountInfoPicklist;
   /*accountInfoFunction({data,error})
    {
        if(data)
        {
            console.log('Account Picklist', data)
        }
        else if(error)
        {
            console.log('Account Error', error);
        }
    }*/
   
   handleChange(event){
    this.value = event.target.value;
   }

   /*connectedCallback() {
    // Check if defaultRecordTypeId is available
    console.log("Account Info:", this.accountInfo);
}*/
}