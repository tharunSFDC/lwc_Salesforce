import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import { createRecord } from 'lightning/uiRecordApi';


export default class Recordform extends LightningElement {
    accountId;
    name;

    handlename(event)
    {
        this.name=event.target.value;
    }

    createAccount(event)
    {
        const recordinput={
            apiName: ACCOUNT_OBJECT.objectApiName,
            fields:{
                [ACCOUNT_NAME.fieldApiName]: this.name,
            }
        };
        createRecord(recordinput)
                .then(account =>{
                    this.accountId=account.id;
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Success',
                            message: 'Account Created',
                            variant: 'success'
                        }),
                    );
                }).catch(error =>{
                    //handle the error message details 
                });

    }
}