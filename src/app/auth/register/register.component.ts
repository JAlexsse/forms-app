import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/services/validator.service';
import { EmailValidatorService } from '../../shared/services/email-validator.service';
import { UsernameValidatorService } from '../../shared/services/username-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = this.formBuilder.group({
    name: [ '', [ Validators.required, Validators.pattern( this.validator.fullNamePattern ) ] ],
    email: [ '', [ Validators.required, Validators.pattern( this.validator.emailPattern ) ], [ this.emailValidator ] ],
    username: [ '', [ Validators.required, this.validator.usernameBlackList ], [ this.usernameValidator ] ],
    password: [ '', [ Validators.required, Validators.pattern( this.validator.passwordPattern ) ] ],
    confirmpassword: [ '', [ Validators.required ] ],
  },{
    //opciones que podemos enviar al formgroup
    validators: [ this.validator.equalFields('password', 'confirmpassword') ]
  })

  get emailErrorMsg(): string {
    return this.registerForm.get('email')?.hasError('required') 
      ? 'You must provide a email address' 
      : this.registerForm.get('email')?.hasError('pattern')
        ? 'You must provide a valid email address'
        : this.registerForm.get('email')?.hasError('emailTaken')
          ? 'Email address already in use'
          : '';
  }

  get usernameErrorMsg(): string {
    return this.registerForm.get('username')?.hasError('required') 
      ? 'You must provide a username' 
      : this.registerForm.get('username')?.hasError('blackListedUsername')
        ? 'You can not use that username'
        : this.registerForm.get('username')?.hasError('usernameTaken')
          ? 'Username already in use'
          : '';
  }

  constructor(
    private formBuilder: FormBuilder,
    private validator: ValidatorService,
    private emailValidator: EmailValidatorService,
    private usernameValidator: UsernameValidatorService
  ) { }

  ngOnInit(): void {
  }

  checkValidField( field: string ):boolean {
    return (this.registerForm.get(field)?.invalid 
      && this.registerForm.get(field)?.touched)!;
  }

  submitForm() {

    if ( this.registerForm.invalid ) {
      this.registerForm.markAllAsTouched();
      return;
    }

    console.log(this.registerForm.value);
    this.registerForm.reset();

  }

}
