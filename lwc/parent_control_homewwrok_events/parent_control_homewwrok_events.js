import { LightningElement } from 'lwc';

export default class Parent_control_homewwrok_events extends LightningElement {
    newvol;

    parenthandle(event)
    {
        this.newvol=event.detail.enm;

    }
}