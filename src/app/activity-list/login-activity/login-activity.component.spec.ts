import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginActivityComponent } from './login-activity.component';

describe('LoginActivityComponent', () => {
  let component: LoginActivityComponent;
  let fixture: ComponentFixture<LoginActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
