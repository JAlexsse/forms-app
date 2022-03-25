import { Component } from '@angular/core';

@Component({
  selector: 'app-switchs',
  templateUrl: './switchs.component.html',
  styles: [
  ]
})
export class SwitchsComponent {

  person = {
    gender: '',
    notifications: false
  }

  termsAndConditions: boolean = false;

}
