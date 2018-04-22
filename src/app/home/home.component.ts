import { Component, OnInit } from '@angular/core';
import {NgxCarousel} from 'ngx-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images = [
    "assets/home/help1_Lwide.jpg",
    "assets/home/help2_Lwide.jpg",
    "assets/home/help3_Lwide.jpg",
    "assets/home/help4_Lwide.jpg",
    "assets/home/help5_Lwide.jpg",
    "assets/home/help6_Lwide.jpg",
    "assets/home/help8_Lwide.jpg",
    "assets/home/help9_Lwide.jpg",
    "assets/home/help10_Lwide.jpg",
  ];

}
