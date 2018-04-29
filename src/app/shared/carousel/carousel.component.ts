import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() _images: any[];
  @Input() interval: number = 3000;

  currentIndex: number = 0;
  private intervalId;

  ngOnInit() {
    // this.intervalId = setInterval(() => {
    //   this.next();
    // }, this.interval);
  }

  ngOnDestroy() {
    // if (this.intervalId) {
    //   clearInterval(this.intervalId);
    // }
  }

  get images() {
    console.log(this.currentIndex, [this._images[this.currentIndex]]);
    return [this._images[this.currentIndex]];
  }

  setCurrentImage(i) {
    this.currentIndex = i;
  }
}
