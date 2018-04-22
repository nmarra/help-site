import {Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss']
})
export class CarouselItemComponent {
  @Input() img: string;
  @ViewChild('myDiv') div: ElementRef;

  getElementRef(): ElementRef {
    return this.div;
  }
}
