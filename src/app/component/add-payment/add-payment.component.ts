import { Component, OnInit } from '@angular/core';
import{PaymentService} from './../../services/payment.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.scss']
})
export class AddPaymentComponent implements OnInit {
  _form: FormGroup;
  // birthDateStartFrom:Date
 
  constructor( private _paymentService: PaymentService,
    ) { }

  ngOnInit(): void {
    this.validateForm()
  }
  onSubmit() {
    let _fromValues = this._form.value;


  //   if (this._form.invalid) {

  //  console.log("الرجاء ملئ البيانات المطلوبة");
  //     return;
  //   }
    this._paymentService.CreatePayment(this._form.value).subscribe(res => {
      console.log('تمت الاضافة بنجاح');
    });
  }
  private validateForm() 
  {
    this._form = new FormGroup({
      creditCardNumber: new FormControl('',[Validators.required]),
      cardholder: new FormControl('',[Validators.required]),
      expirationDate: new FormControl('',),
      securityCode: new FormControl('',[
        Validators.required,
        Validators.maxLength(3)
      ]),
      amount: new FormControl('',[
        Validators.required,
        // CustomValidators.number,
      ])
    });


  }


/*--------------- Form Validation -------------------- */
hasError(controlName: string, errorName: string) {
  return this._form.controls[controlName].hasError(errorName);
}

isInValidInput(controlName: string) {
  if (this._form.controls[controlName].untouched)
    return false;
  return this._form.controls[controlName].invalid;

}
isValidInput(controlName: string) {
  if (this._form.controls[controlName].untouched)
    return false;
  return this._form.controls[controlName].valid;
}

getInputValue(controlName: string) {
  return this._form.controls[controlName].value;
}

 


}

