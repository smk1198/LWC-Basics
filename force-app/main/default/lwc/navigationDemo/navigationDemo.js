import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';

export default class NavigationDemo extends NavigationMixin(LightningElement) {

    navHomeClickHandler(){
        let pageReg = {
            type: 'standard__namedPage',
            attributes: {
                pageName: 'home'
            }
        };
        this[NavigationMixin.Navigate](pageReg);
    }

    navAccListViewClickHandler(){
        let pageRef = {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'list'
            },
            state: {
                filterName: 'PlatinumandGoldSLACustomers'
          }
        };
        this[NavigationMixin.Navigate](pageRef);
    }

    createNewAccClickHandler(){
        let pageRecordRef = {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'new'
            },
        };
        this[NavigationMixin.Navigate](pageRecordRef);
    }

    createNewDefaultValueAccClickHandler(){
        const defaultvalues = encodeDefaultFieldValues({
            Industry :'Energy',
            Rating : 'Hot',

        });
        let pageDefaultRef = {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'new'
            },
            state: {
                defaultFieldValues : defaultvalues
            }
        };
        this[NavigationMixin.Navigate](pageDefaultRef);
    }

    editAccClickHandler(){
        let pageEdit = {
            type: 'standard__recordPage',
            attributes: {
                recordId: '001dL00000QJAhVQAX',
                objectApiName: 'Account',
                actionName: 'edit'
            }
    };
    this[NavigationMixin.Navigate](pageEdit);
    }
}