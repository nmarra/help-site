import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent {
  @Input() image: string;
  @Input() bio: string;
  @Input() name: string;

}
