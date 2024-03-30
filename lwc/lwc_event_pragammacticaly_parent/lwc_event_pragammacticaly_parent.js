import { LightningElement } from 'lwc';

export default class Lwc_event_pragammacticaly_parent extends LightningElement {
    name;
    constructor()
    {
        super();
        this.template.addEventListener('proevent',this.handlevent);
    }
    handlevent(event)
    {
        this.name=event.detail.enm;
        alert('This is parent lwc component and I heard an event form child component'+ event.detail.enm);
    }
}