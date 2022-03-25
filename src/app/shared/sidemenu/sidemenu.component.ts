import { Component } from '@angular/core';

interface MenuItem {
  description: string;
  route: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent {
  templateMenu: MenuItem[] = [
    {
      description: 'Basics',
      route: 'template/basics'
    },
    {
      description: 'Dynamics',
      route: 'template/dynamics'
    },
    {
      description: 'Switchs',
      route: 'template/switchs'
    }
  ];

  reactiveMenu: MenuItem[] = [
    {
      description: 'Basics',
      route: 'reactive/basics'
    },
    {
      description: 'Dynamics',
      route: 'reactive/dynamics'
    },
    {
      description: 'Switchs',
      route: 'reactive/switchs'
    }
  ];

  authMenu: MenuItem[] = [
    {
      description: 'Login',
      route: 'auth/login'
    },
    {
      description: 'Register',
      route: 'auth/register'
    }
  ];
}
