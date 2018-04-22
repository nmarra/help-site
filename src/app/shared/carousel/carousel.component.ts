import {AfterViewInit, Component, ContentChildren, ElementRef, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import {group, animate, query, transition, style, trigger} from '@angular/animations';
import {CarouselItemComponent} from './carousel-item.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  // animations: [
  //   trigger('carouselAnimation', [
  //     transition(":increment", group([
  //       query(':enter', [
  //         animate('0.5s ease-in', style({ opacity: '1' }),)
  //       ]),
  //       query(':leave', [
  //         animate('0.5s ease-out', style({ opacity: '0' }))
  //       ])
  //     ])),
  //     // transition(":decrement", group([
  //     //   query(':enter', [
  //     //     style({ opacity: '0' }),
  //     //     animate('0.5s ease-out', style('*'))
  //     //   ]),
  //     //   query(':leave', [
  //     //     animate('0.5s ease-out', style({ opacity: '1' }))
  //     //   ])
  //     // ]))
  //   ])
  // ]
})
export class CarouselComponent implements AfterViewInit {
  @ViewChildren(CarouselItemComponent) cis: QueryList<CarouselItemComponent>;
  @Input() images: any[];

  currentIndex: number = 0;

  ngAfterViewInit() {
    this.cis.toArray()[this.currentIndex].getElementRef().nativeElement.style.display = 'inherit';
  }

  prev() {
    this.setCurrentImage(this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex -1);
  }

  next() {
    this.setCurrentImage(this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex +1);
  }

  setCurrentImage(i: number) {
    this.cis.toArray()[this.currentIndex].getElementRef().nativeElement.style.display = 'none';
    this.currentIndex = i;
    this.cis.toArray()[this.currentIndex].getElementRef().nativeElement.style.display = 'inherit';
  }
}
