import { LightningElement, wire } from 'lwc';
import getAccountData from'@salesforce/apex/AccountHelper.getAccountData';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_INDUSTRY from '@salesforce/schema/Account.Industry';

const columns = [
    { label: 'Account Name', fieldName: 'Name'},
    { label: 'Account Industry', fieldName: 'Industry'},
    { label: 'Account Rating', fieldName: 'Rating'}
];

export default class ImperativeApexDemo extends LightningElement {
    data=[];
    columns = columns;
    options=[];
    selectedIndustry;

   @wire(getObjectInfo, {
    objectApiName : ACCOUNT_OBJECT
   })
   accountInfo;

    @wire(getPicklistValues, {
        recordTypeId : "$accountInfo.data.defaultRecordTypeId",
        fieldApiName : ACCOUNT_INDUSTRY
    })
    industryPickList;

    handleChange(event){
        this.selectedIndustry = event.target.value;
    }

    clickHandler(){
        getAccountData({
            inputIndustry : this.selectedIndustry
        })
        .then((result) => {
            console.log("Account Results", result);
            this.data = result;
        })
        .catch((error) => {
            console.log("Account Error", error);
        });
    }
}