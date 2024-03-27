import { LightningElement, } from 'lwc';

export default class Lwc_hooks_child extends LightningElement {


    constructor()
    {
        super()
        alert('yes iam in child comp');
    }
}