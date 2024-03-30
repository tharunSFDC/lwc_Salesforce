import { LightningElement } from 'lwc';

export default class Child_event_employee extends LightningElement {
    name;
    id;
    phone;
    city;

    handlname(event){
        this.name=event.target.value;
    }
    handlid(event){
        this.id=event.target.value;

    }
    handlPhone(event){
        this.phone=event.target.value;

    }
    handlesunmit(event){
        const newevent = CustomEvent('newdetails',
        {detail:{enm:this.name,
                eid:this.id,
                eph:this.phone}});
        this.dispatchEvent(newevent);

    }



}