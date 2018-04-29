import {AfterViewInit, Component, Input, OnDestroy, OnInit, QueryList, ViewChildren} from '@angular/core';
import {animate, group, query, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  // animations: [
    // trigger('slide', [
    //   transition(":increment", group([
    //     query(':enter', [
    //       style({ left: '100%' }),
    //       animate('0.5s ease-out', style('*'))
    //     ],{ optional: true }),
    //     query(':leave', [
    //       animate('0.5s ease-out', style({ left: '-100%' }))
    //     ],{ optional: true })
    //   ])),
    //   transition(":decrement", group([
    //     query(':enter', [
    //       style({ left: '-100%' }),
    //       animate('0.5s ease-out', style('*'))
    //     ],{ optional: true }),
    //     query(':leave', [
    //       animate('0.5s ease-out', style({ left: '100%' }))
    //     ],{ optional: true })
    //   ]))
    // ])]
})
export class CarouselComponent implements OnInit, OnDestroy, AfterViewInit {
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
  ngAfterViewInit() {
  }

  get images() {
    console.log(this.currentIndex, [this._images[this.currentIndex]]);
    return [this._images[this.currentIndex]];
  }

  prev() {
    this.currentIndex = this.currentIndex === 0 ? this._images.length - 1 : this.currentIndex -1;
  }

  next() {
    this.currentIndex = this.currentIndex === this._images.length - 1 ? 0 : this.currentIndex +1;
  }

  setCurrentImage(i) {
    this.currentIndex = i;
  }
}
