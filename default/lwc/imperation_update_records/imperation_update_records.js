import { LightningElement, wire } from 'lwc';
import emailcontacts from '@salesforce/apex/contact_records.newcontactsemails';
import ID_FIELD from '@salesforce/schema/Contact.Id';
import FRIST_NAME from '@salesforce/schema/Contact.FirstName';
import LAST_NAME from '@salesforce/schema/Contact.LastName';
import PHONE from '@salesforce/schema/Contact.Phone';
import EMAIL from '@salesforce/schema/Contact.Email';
import { updateRecord } from 'lightning/uiRecordApi';

const coulm =[
    {label:'FirstName',fieldName:'FirstName',editable:true},
    {label:'LastName',fieldName:'LastName',editable:true},
    {label:'Phone',fieldName:'Phone',editable:true},
    {label:'Email',fieldName:'Email',editable:true}

];

export default class Imperation_update_records extends LightningElement {

    col=coulm;
    draftValues=[];
    @wire(emailcontacts) contacts;
    handlesave(event)
    {
        const fields={};
        fields=[ID_FIELD.fieldName]=event.detail.draftValues[0].id;
        fields=[FRIST_NAME.fieldName]=event.detail.draftValues[0].FirstName;
        fields=[LAST_NAME.fieldName]=event.detail.draftValues[0].LastName;
        fields=[PHONE.fieldName]=event.detail.draftValues[0].Phone;
        fields=[EMAIL.fieldName]=event.detail.draftValues[0].Email;

        const recordApi={fields};
        updateRecord(recordApi).then().catch();
    }

}