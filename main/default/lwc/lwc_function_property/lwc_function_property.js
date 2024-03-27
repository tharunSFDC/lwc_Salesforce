/**
 * @description       : 
 * @author            : Tharun
 * @last modified on  : 12-30-2023
 * @last modified by  : Tharun
 * Modifications Log
 * Ver   Date         Author     Modification
 * 1.0   12-30-2023   Tharun   Initial Version
**/
import { LightningElement,wire } from 'lwc';
import findContacts from '@salesforce/apex/contact_search_class.emailcontact';

export default class Lwc_wirefunctionorproperty extends LightningElement {
    serachkey;
    condata;
    conerror;
    debugger;
    handlesearch(event){
        this.serachkey=event.target.value;
    }

    /*Wire a Property*/ 

    @wire(findContacts,{searchtext:'$serachkey'}) contacts;

    /*Wire a Function*/
    @wire(findContacts,{searchtext:'$serachkey'}) contactf({error,data}){
        if(data){
            this.condata=data;
        }
        else{
            this.conerror=error;
            this.condata=undefined;
        }
    }
}