import { createRecord } from 'lightning/uiRecordApi';
import { LightningElement } from 'lwc';

export default class Imperation_create_record extends LightningElement {

    name;
    phone;
    fax;
    email;

    handlename(event)
    {
        this.name=event.target.value;

    }
    handlephone(event)
    {
        this.phone=event.target.value;
    }
    handlefax(event)
    {
        this.fax=event.target.value;

    }
    handleemail(event)
    {
        this.email=event.target.value

    }
    handlesubmit(event)
    {
        const feilds={'LastName':this.name,'Phone':this.phone,'Fax':this.fax,'Email':this.email};
        const recordApi={apiName:'Contact',feilds};
        createRecord(recordApi).then(response=> {
            alert('Records created successfully'+response.Id);
        }).catch(error => {
            alert('Record creation faild'+error.body.message);
        });

    }


}