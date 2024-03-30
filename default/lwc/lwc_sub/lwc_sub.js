import { LightningElement,wire } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation';
import pubsub from 'c/pubsub';

export default class Lwc_subscriber extends LightningElement {
    @wire(CurrentPageReference) pageRef;
    message='';
    connectedCallback(){
        debugger;
        pubsub.registerListener('sendmessage', this.handleIncomingmessage, this);
    }
    handleIncomingmessage(message){
        this.message=message;
    }
}