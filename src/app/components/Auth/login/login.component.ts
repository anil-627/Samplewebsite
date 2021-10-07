import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient ) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
      this.http.get('login',).subscribe(()=>{
        console.log("login called");     
      })
  }

}
