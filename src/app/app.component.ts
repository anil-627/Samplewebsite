import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  routeURL: any = '';
  constructor(private router: Router,)
  {
  }
  title = 'HomeWebsite';
  ngOnInit() {
    this.routeURL = this.router.url;
    console.log('this.routeURL',this.routeURL);
    
    $('#loading_indicator').show();
    $('#app').hide();
  }
  ngAfterViewInit() {
    $('#loading_indicator').hide();
    $('#app').show();
  }
}
