import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeActivityComponent } from './recharge-activity.component';

describe('RechargeActivityComponent', () => {
  let component: RechargeActivityComponent;
  let fixture: ComponentFixture<RechargeActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechargeActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargeActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
