import { LightningElement, wire } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation';
import { registerListener, unregisterAllListeners } from 'c/pub_sub';

export default class Subscriber extends LightningElement {

    anothertest='';
    @wire(CurrentPageReference) pageRef;

    connectedCallback()
    {
        registerListener('eventfrompub',this.setcpaturetest,this);
    }
    disconnectedCallback()
    {
        unregisterAllListeners(this);

    }
    setcpaturetest(objectPayload)
    {
        this.anothertest=objectPayload;
    }


}