import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OtpVerficationComponent } from './otp-verfication.component';

describe('OtpVerficationComponent', () => {
  let component: OtpVerficationComponent;
  let fixture: ComponentFixture<OtpVerficationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OtpVerficationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpVerficationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
