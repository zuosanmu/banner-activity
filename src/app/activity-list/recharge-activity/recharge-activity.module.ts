import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RechargeActivityComponent } from './recharge-activity.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RechargeActivityComponent
      }
    ])
  ],
  declarations: [RechargeActivityComponent]
})
export class RechargeActivityModule { }
