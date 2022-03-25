import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent  implements OnInit {
  
  @ViewChild( 'myForm' ) myForm!: NgForm;

  initForm = {
    product: 'product name',
    price: 0,
    stock: 0
  }

  ngOnInit(): void {
  }

  validProduct():boolean {
    return (
      this.myForm?.controls['product']?.invalid &&
      this.myForm?.controls['product']?.touched 
      ) ? true : false;
  }

  save() {
    console.log(this.myForm);
    this.myForm.resetForm({
      product: 'product name',
      price: 0,
      stock: 0
    });
  }
}
