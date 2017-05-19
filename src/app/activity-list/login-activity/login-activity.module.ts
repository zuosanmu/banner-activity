import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginActivityComponent } from './login-activity.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginActivityComponent
      }
    ])
  ],
  declarations: [LoginActivityComponent]
})
export class LoginActivityModule { }
