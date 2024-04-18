import { LightningElement, wire } from 'lwc';
import queryAccountsByRevenue from '@salesforce/apex/AccountListControllerLwc.queryAccountsByRevenue';
export default class AccountFinder extends LightningElement {

    @wire(queryAccountsByRevenue,{annualRevenue : '$annualRevenue'}) accounts;

}