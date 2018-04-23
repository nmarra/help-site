import {ChangeDetectorRef, Component, Input} from '@angular/core';

@Component({
  selector: 'carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss']
})
export class CarouselItemComponent {
  @Input() img: string;
  isVisible: boolean;

  constructor(private cd: ChangeDetectorRef) {

  }
  setVisibility(vis: boolean) {
    this.isVisible = vis;
    this.cd.detectChanges();
  }
}
