import { LightningElement } from 'lwc';

col=[
    {label:'Name',filedName:'Name'},
    {label:'Rating',filedName:'Rating'},
    {label:'Industry',filedName:'Industry'},
    {label:'AnnualRevenue',filedName:'AnnualRevenue'}

]

export default class Parent_record_display_event extends LightningElement {
    col=columes;
    accountvalues=[];

    showAccounts(event)
    {
        this.accountvalues=event.detail.enm;


    }
}