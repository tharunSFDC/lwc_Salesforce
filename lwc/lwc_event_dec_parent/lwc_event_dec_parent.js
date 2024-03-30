import { LightningElement } from 'lwc';

export default class Lwc_event_dec_parent extends LightningElement {

    vol=0;
    cname='please click on the button';

    handlevolinc(event)
    {
        this.cname=event.detail;
        
        if(this.vol<100)
        {
            this.vol=this.vol+1;
        }


    }
    handlevoldec(event)
    {
        this.cname=event.detail;
        if(this.vol>0)
        {
            this.vol=this.vol-1;
        }

    }
}