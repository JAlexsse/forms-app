import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  myForm: FormGroup = this.formBuilder.group({
    //[valor por defecto, validadores sincronos, validadores asincronos]
    product: [ , [ Validators.required, Validators.minLength(3) ] ],
    price: [ , [ Validators.required, Validators.min(0) ] ],
    stock: [ , [ Validators.required, Validators.min(0) ] ]
  })

  constructor(
    private formBuilder: FormBuilder
  ) { }
  
  ngOnInit(): void {
      //cuando seteamos valores con setValue tienen qu ir todos los valores
      //no asi cuando hacemos reset
      this.myForm.reset({
        product: '',
        price: 0
      });
  }

  checkValidField( field: string ): boolean {
    return (this.myForm.controls[field].errors 
      && this.myForm.controls[field].touched)!;
  }

  save() {
    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm);
    this.myForm.reset();
  }
}
