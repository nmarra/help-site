import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.scss']
})
export class VolunteerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  volunteerImages = [
    "assets/volunteer/volunteers1.jpg",
    "assets/volunteer/volunteers2.jpg" ,
    "assets/volunteer/volunteers3.jpg",
    "assets/volunteer/volunteers4.jpg"
  ];

}
