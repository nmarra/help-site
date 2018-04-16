import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import {NgxCarousel} from 'ngx-carousel';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  logo = "assets/logo.jpg";

  public imageCarousel: NgxCarousel;
  public carouselTileItems: Array<any> = [];
  images = [
    "assets/help1_Lwide.jpg",
    "assets/help2_Lwide.jpg",
    "assets/help3_Lwide.jpg",
    "assets/help4_Lwide.jpg",
    "assets/help5_Lwide.jpg",
    "assets/help6_Lwide.jpg",
    "assets/help8_Lwide.jpg",
    "assets/help9_Lwide.jpg"
  ];

  ngOnInit() {
    this.imageCarousel = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    };
    this.carouselLoad();
  }

  public carouselLoad() {
    for (let i = 0; i < this.images.length; i++) {
      this.carouselTileItems.push(this.images[i]);
    }
  }
}
