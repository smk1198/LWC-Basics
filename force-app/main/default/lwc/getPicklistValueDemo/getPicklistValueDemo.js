import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_INDUSTRY from '@salesforce/schema/Account.Industry';

export default class GetPicklistValueDemo extends LightningElement {

    @wire(getObjectInfo, {
        objectApiName : ACCOUNT_OBJECT
    })
    accountprop;

    @wire(getPicklistValues,{
        recordTypeId : '$accountprop.data.defaultRecordTypeId',
        fieldApiName : ACCOUNT_INDUSTRY
    })
    outputFunction({data,error})
    {
        if(data)
        {
            console.log('Picklist Data' , data);
        }
        else if(error)
        {
            console.log('Picklist Error', error);
        }
    }
}