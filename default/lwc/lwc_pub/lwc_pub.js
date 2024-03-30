import { LightningElement,wire } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation';
import pubsub from 'c/pubsub';
export default class Lwc_publish extends LightningElement {

    @wire (CurrentPageReference) pageRef;
    message='';
    handleMessageChange(event){
        this.message= event.target.value;
    }
    handlepublish(event){
        //fire Event (or) Publish Event
        pubsub.fireEvent(this.pageRef,'sendmessage',this.message);
    }
}