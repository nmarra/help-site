import {Component, Input, OnInit} from '@angular/core';
import {NgxCarousel} from 'ngx-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  public imageCarousel: NgxCarousel;
  public carouselTileItems: Array<any> = [];
  @Input() images: any[];

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
