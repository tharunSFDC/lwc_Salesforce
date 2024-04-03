import { LightningElement, track } from 'lwc';
export default class CustomValidation extends LightningElement {
handleChange(event){
    let currentLabel=event.target.label;
    console.log('@@@@label@@'+currentLabel);
    if(currentLabel==="FirstName"){
        let fname=this.template.querySelector(".FName");
        let fnameval=fname.value;
        if(! fnameval){
            fname.setCustomValidity("Please Enter the FirstName");
        }
        else{
            fname.setCustomValidity("");
        }
        fname.reportValidity();
    }
    else if(currentLabel==="Choose"){
        let isChecked=this.template.querySelector(".Choose");
        let isCheckedVal=isChecked.checked;
        if(isCheckedVal==false){
            isChecked.setCustomValidity("Please tick the checkbox");
        }
        else{
            isChecked.setCustomValidity("");
        }
        isChecked.reportValidity();

    }
}
}
