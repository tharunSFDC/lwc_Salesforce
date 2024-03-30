import { LightningElement } from 'lwc';

export default class Child_contorl_howwork_events extends LightningElement {
    vol;
    handleinput(event)
    {
        this.vol=event.target.value;
        const newevetn= CustomEvent('entertest',{detail:{enm:this.vol}});
        this.dispatchEvent(newevetn);
    }
}