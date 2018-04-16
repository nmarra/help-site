import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  logo = "assets/logo.jpg";
  images = [
    {src: "assets/help1_Lwide.jpg"},
    {src: "assets/help2_Lwide.jpg"},
    {src: "assets/help3_Lwide.jpg"},
    {src: "assets/help4_Lwide.jpg"},
    {src: "assets/help5_Lwide.jpg"},
    {src: "assets/help6_Lwide.jpg"},
    {src: "assets/help8_Lwide.jpg"},
    {src: "assets/help9_Lwide.jpg"},
  ]
}
