import { LightningElement, wire } from 'lwc';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
import CONTACT_NAME_FIELD from '@salesforce/schema/contact.Name';
import {getRecords} from 'lightning/uiRecordApi';
export default class GetRecordsDemo extends LightningElement {
    outputs;
    errors;
    @wire(getRecords,{
        records :[
            {
                recordIds : ['001dL00000QJAhVQAX', '001dL00000QJAhXQAX'],
                fields : [ACCOUNT_NAME_FIELD]
            },
            {
                recordIds : ['003dL000007gzJDQAY'],
                fields : [CONTACT_NAME_FIELD]
            }
        ]
    })
    outputFunction({data,error})
    {
        if(data){
            console.log('data', data);
            this.outputs = data;
            this.errors = null;
        } else if(error){
            console.log('error', error);   
            this.errors = error;
            this.outputs = null;
        }
    }
    
}