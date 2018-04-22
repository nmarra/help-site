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
  logo = "assets/home/logo.jpg";
}
