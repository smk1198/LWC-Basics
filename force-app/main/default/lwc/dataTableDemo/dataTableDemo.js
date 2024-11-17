import { LightningElement,wire } from 'lwc';
import getAccountData from'@salesforce/apex/AccountHelper.getAccountData';
const columns = [
    { label: 'Account Id', fieldName: 'Id' },
    { label: 'Account Name', fieldName: 'Name' },
    { label: 'Account Rating', fieldName: 'Rating'}
    
];


export default class DataTableDemo extends LightningElement {
    accDatatable;
    errors;
    columns = columns;
    @wire(getAccountData) 
    getDatable({data,error})
    {
        if(data)
        {
            this.accDatatable = data;
            this.errors = null;
        } else if(error){
            this.errors = error;
            this.accDatable = null;
        }
    }
}