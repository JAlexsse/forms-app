import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent {

  myForm: FormGroup = this.formBuilder.group({
    name: [ , [ Validators.required, Validators.minLength(3) ] ],
    favourites: this.formBuilder.array( [
      //array de form controls, por lo cual podemos agregar validaciones dentro
      [ 'Child of Light' ],
      [ 'Genshin Impact' ]
    ], [
      Validators.required,
      Validators.minLength(2)
    ] )
  });

  newFavourite: FormControl = this.formBuilder.control( '' , Validators.required );

  get favouritesGames() {
    return this.myForm.get('favourites') as FormArray;
  }

  constructor(
    private formBuilder: FormBuilder
  ) { }

  checkValidField( field: string ):boolean {
    return ( this.myForm.controls[field].errors 
      && this.myForm.controls[field].touched )!;
  }

  addFavourite() {
    if ( this.newFavourite.invalid ) {
      return;
    }

    this.favouritesGames.push( this.formBuilder.control( this.newFavourite.value, Validators.required ) );
    this.newFavourite.reset();
  
  }
  
  deleteFavourite( index: number ) {
    this.favouritesGames.removeAt(index);
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
