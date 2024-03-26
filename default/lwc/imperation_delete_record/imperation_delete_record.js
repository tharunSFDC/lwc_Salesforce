import { deleteRecord } from 'lightning/uiRecordApi';
import { LightningElement, api } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class Imperation_delete_record extends LightningElement {

    @api recordId;

    handledelete(event)
    {
        deleteRecord(this.recordId).then(response =>
            {
                this[NavigationMixin.Navigate]({
                    type:'standard__objectPage',
                    attributes:{
                        objectApiName:'Contact',
                        actionName:'list'
                    },
                    state:{
                        filterName:'Recent'

                    },

                })
            }).catch( error =>
                {
                    alert(error.body.message);
                });

    }
}