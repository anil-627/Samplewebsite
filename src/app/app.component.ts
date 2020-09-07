import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'HomeWebsite';
  ngOnInit() {
    $('#loading_indicator').show();
  }
  ngAfterViewInit() {
    $('#loading_indicator').hide();
  }
}
