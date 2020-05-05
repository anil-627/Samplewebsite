import { Component, OnInit } from '@angular/core';
declare var $: any;
import Swiper from 'swiper';

@Component({
  selector: 'app-app-body',
  templateUrl: './app-body.component.html',
  styleUrls: ['./app-body.component.css']
})
export class AppBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready( () => {
      // initialize swiper when document ready
      // tslint:disable-next-line: prefer-const
       var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : true,
        },
        pagination: {
          el: '.swiper-pagination',
        },
      });
    });
  }

}
