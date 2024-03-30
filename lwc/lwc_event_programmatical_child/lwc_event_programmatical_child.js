import { LightningElement } from 'lwc';

export default class Lwc_event_programmatical_child extends LightningElement {
    name;
    handname(event)
    {
        this.name=event.target.value;
    }
    handlesave(event)
    {
        this.dispatchEvent(new CustomEvent('proevent',{detail:{enm:this.name},bubbles:true,composed:true}));
    }
}