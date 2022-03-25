import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './basics/basics.component';
import { DynamicsComponent } from './dynamics/dynamics.component';
import { SwitchsComponent } from './switchs/switchs.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basics',
        component: BasicsComponent
      },
      {
        path: 'dynamics',
        component: DynamicsComponent
      },
      {
        path: 'switchs',
        component: SwitchsComponent
      },
      {
        path: '**',
        redirectTo: 'basics'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class TemplateRoutingModule { }
