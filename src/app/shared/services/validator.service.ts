import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public fullNamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  public passwordPattern: string = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}';

  constructor() { }

  usernameBlackList( control: FormControl ): ValidationErrors | null {
    const value: string = control.value?.trim().toLowerCase();
    if ( value == 'alexsse' ) {
      return {
        blackListedUsername: true
      }
    }

    return null; //en una validacion si regresamos null significa que todo esta correcto
  }

  equalFields( field1: string, field2: string ) {
    return ( control: AbstractControl ): ValidationErrors | null => {
      
      const f1: string = control.get(field1)?.value;
      const f2: string = control.get(field2)?.value;
      
      if ( f1 !== f2 ) {
        
        control.get(field2)?.setErrors({
          differentFields: true
        });

        return {
          differentFields: true
        }
      }

      control.get(field2)?.setErrors(null);
      return null;
    }
  }
}
