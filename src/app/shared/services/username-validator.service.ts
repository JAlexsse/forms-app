import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsernameValidatorService implements AsyncValidator{

  constructor(
    private http: HttpClient
  ) { }
  
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const username = control.value;

    return this.http.get<any[]>(`http://localhost:3000/usuarios?username=${ username }`)
    .pipe(
      map(users => {
        return users.length > 0 
          ? { usernameTaken: true } 
          : null;
      })
    )
  } 
}
