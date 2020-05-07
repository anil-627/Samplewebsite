import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
declare var $: any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    $(document).ready( () => {
      AOS.init();
    });
  }
}
