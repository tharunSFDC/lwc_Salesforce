import { LightningElement } from 'lwc';

export default class Programmitaclly_parent_empoyee extends LightningElement {
    empName;
    empid;
    empPhone;
    empEmail;
    constructor()
    {
        super();
        this.template.addEventListener('childhere',this.handlenewevent);

    }
    handlenewevent(event)
    {
        alert(event.detail.enm);
        alert(event.detail.eid);
        alert(event.detail.em);
        alert(event.detail.ep);
        
    }
}