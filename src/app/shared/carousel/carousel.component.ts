import {AfterViewInit, Component, Input, OnDestroy, OnInit, QueryList, ViewChildren} from '@angular/core';
import {CarouselItemComponent} from './carousel-item.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChildren(CarouselItemComponent) cis: QueryList<CarouselItemComponent>;
  @Input() images: any[];
  @Input() interval: number = 3000;

  currentIndex: number = 0;
  private intervalId;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.next();
    }, this.interval);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  ngAfterViewInit() {
    this.cis.toArray()[this.currentIndex].setVisibility(true);
  }

  prev() {
    this.setCurrentImage(this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex -1);
  }

  next() {
    this.setCurrentImage(this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex +1);
  }

  setCurrentImage(i: number) {
    this.cis.toArray()[this.currentIndex].setVisibility(false);
    this.currentIndex = i;
    this.cis.toArray()[this.currentIndex].setVisibility(true);
  }
}
