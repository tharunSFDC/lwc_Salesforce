import { LightningElement, api } from 'lwc';

export default class Child_record_create extends LightningElement {
    @api recordId;

    datacollect=[];

    parenthandle(event)
    {
        this.datacollect=event.target.value;
        const childevent=CustomEvent("childhere",{detail:{enm:this.datacollect}});
        this.dispatchEvent(childevent);
    }
}