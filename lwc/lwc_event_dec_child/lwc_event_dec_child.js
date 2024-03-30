import { LightningElement } from 'lwc';

export default class Lwc_event_dec_child extends LightningElement {
    handleinc(event)
    {
        //step1 --> Create a event
        const inc=new CustomEvent('increase',{detail:'Volume Increase'});
        //step2 --> Dispatch Event
        this.dispatchEvent(inc);

    }
    handledec(event)
    {
        //step1: createe a event
        //step2 : dispatch a event
        this.dispatchEvent(new CustomEvent('decrease',{detail:'Volume Decrease'}));

    }
}