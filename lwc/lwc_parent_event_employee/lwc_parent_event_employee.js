import { LightningElement } from 'lwc';

export default class Lwc_parent_event_employee extends LightningElement {
    empname;
    empid;
    empPhone;
    handlevent(event)
    {
        this.empname=event.detail.enm;
        this.empid=event.detail.eid;
        this.empPhone=event.detail.eph;

    }
}