import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivityListComponent } from './activity-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ActivityListComponent
      },
      {
        path: 'login-activity',
        loadChildren: './login-activity/login-activity.module#LoginActivityModule'
      },
      {
        path: 'recharge-activity',
        loadChildren: './recharge-activity/recharge-activity.module#RechargeActivityModule'
      }])
  ],
  declarations: [
    ActivityListComponent
  ]
})
export class ActivityListModule { }
