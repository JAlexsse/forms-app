import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switchs',
  templateUrl: './switchs.component.html',
  styles: [
  ]
})
export class SwitchsComponent implements OnInit{

  myForm: FormGroup = this.formBuilder.group({
    gender: [ 'M', Validators.required ],
    notifications: [ false, Validators.required ],
    termsAndConditions: [ false, Validators.requiredTrue ]
  });

  person = {
    gender: 'F',
    notifications: true
  }

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
      //le pasamos la propiedad que no se encuentra en la persona
      //con el objetivo de que su valor no sea null
      this.myForm.reset( { 
        ...this.person,
        termsAndConditions: false
      } );

      //si necesito mantener a la persona siempre actualizada con los cambios
      //podemos utilizar el suscribe

      /**
       * 
       * this.myForm.valueChanges.suscribe( ( conditions, ...personInfo ) => {
       *  this.person = personInfo;
       * });
       * 
       */
  }

  save() {

    if ( this.myForm.invalid ) {
      return;
    }

    const formValue = { ...this.myForm.value };
    delete formValue.termsAndConditions;

    this.person = formValue;

  }
}
