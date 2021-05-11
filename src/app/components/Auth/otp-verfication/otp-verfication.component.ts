import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-verfication',
  templateUrl: './otp-verfication.component.html',
  styleUrls: ['./otp-verfication.component.css']
})
export class OtpVerficationComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  onOtpChange(event){
    console.log(event);
    
  }
  verifyOTP()
  {
  this.router.navigate(['/Authentication'])
  }
}
