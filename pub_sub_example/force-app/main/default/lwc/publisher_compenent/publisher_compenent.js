import { LightningElement,wire } from 'lwc';
import { fireEvent } from 'c/pub_sub';
import { CurrentPageReference } from 'lightning/navigation';

export default class Publisher_compenent extends LightningElement {

    publisevent='';
    @wire(CurrentPageReference) objectpageref;

    handlechange(event)
    {
        this.publisevent=event.target.value;
    }

    handlebutton()
    {
        fireEvent(this.objectpageref,'eventfrompub',this.publisevent);
    }

}