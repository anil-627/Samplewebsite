import { Component, OnInit } from '@angular/core';
declare var $: any;
import Swiper from 'swiper';
import AOS from 'aos';

@Component({
  selector: 'app-app-body',
  templateUrl: './app-body.component.html',
  styleUrls: ['./app-body.component.css']
})
export class AppBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    $(document).ready( () => {
      AOS.init();
      // initialize swiper when document ready
      // tslint:disable-next-line: prefer-const
      let mySwiper1 = new Swiper ('.swiper1', {
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
        autoplay: {
          delay: 3000,
        },
        pagination: {
          el: '.swiper-pagination1',
        },

      });
      let mySwiper2 = new Swiper ('.swiper2', {
        // Optional parameters
        slidesPerView: 'auto',
        spaceBetween: 30,
        effect: 'fade',
        autoplay: {
          delay: 5000,
        },
        pagination: {
          el: '.swiper-pagination2',
          clickable: true,
        },

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

    });
  }

}
