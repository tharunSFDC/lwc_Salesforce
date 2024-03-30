import { LightningElement } from 'lwc';

export default class Progarmmatically_child_emplyoee extends LightningElement {
    name;
    empid;
    emailid;
    phone;

    handlename(event)
    {
        this.name=event.target.value;

    }
    handleId(event)
    {
        this.empid=event.target.value;

    }
    handleemail(event)
    {
        this.emailid=event.target.value;
    }
    handlephonenumber(event)
    {
        this.phone=event.target.value;
    }
    handlsubmit(event)
    {
        const childpro=CustomEvent('childhere',{detail:{enm:this.name,eid:this.empid,em:this.emailid,ep:this.phone},bubbles:true,composed:true});
        this.dispatchEvent(childpro);

    }
}