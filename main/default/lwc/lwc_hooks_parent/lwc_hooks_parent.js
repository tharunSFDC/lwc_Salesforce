import { LightningElement, track } from 'lwc';

export default class Lwc_hooks_parent extends LightningElement {

    @track newname;
    @track hasvalue=true;
    @track hasdiff;

    constructor(){

        super()
        alert('Yes I am Parent con');
    }
    connectedCallback()
    {
        alert('Yes i am in parent connectedcallback');
    }
    connectedCallback()
    {
        this.newname='Tharun Panguluru';
        alert(this.newname);
    }
    connectedCallback()
    {
        this.newname='new salesforce connectedcallback';
        alert(this.newname);
    }

    renderedCallback()
    {
        if(this.hasvalue)
        {
            this.hasdiff='rendercallback';
            alert(this.hasdiff);
            this.hasvalue=false;
        }

    }
    handlevent()
    {
        this.hasdiff='SFDC rendered callback';
        alert(this.hasdiff);
    }
}