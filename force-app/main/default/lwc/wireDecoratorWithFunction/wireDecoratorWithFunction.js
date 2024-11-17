import { LightningElement, wire } from 'lwc';
import getAccountData from '@salesforce/apex/AccountHelper.getAccountData';
const columns = [
    { label: 'Account Name', fieldName: 'Name' },
    { label: 'Account Industry', fieldName: 'Industry' },
    { label: 'Account Rating', fieldName: 'Rating'}
];
export default class WireDecoratorWithFunction extends LightningElement {
    accounts;
    errors;
    columns = columns;
    @wire(getAccountData)
    accountFunction({data,error})
    {
        if(data)
        {
           console.log(data);
           let updatedAccounts = data.map((currItem) => {
            let updatedObject = {};

            if(!currItem.hasOwnProperty("Rating"))
            {
                updatedObject = { ...currItem, Rating : "Warm" };
            } else{
                updatedObject = { ...currItem };
            }
            return updatedObject;
           });
           console.log("updatedAccounts",updatedAccounts);
           this.accounts = [...updatedAccounts];
           this.errors = null;
        }
        else if(error)
        {
            console.log(error);
            this.errors = error;
            this.accounts = null;
        }
    }

}