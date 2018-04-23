import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatSidenavModule, MatToolbarModule, MatIconModule,
  MatButtonModule, MatMenuModule, MatListModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import 'hammerjs';
import { VisitComponent } from './visit/visit.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { DonateComponent } from './donate/donate.component';
import { MeetTheHerdComponent } from './meet-the-herd/meet-the-herd.component';
import { MeetTheStaffComponent } from './meet-the-staff/meet-the-staff.component';
import { BioComponent } from './shared/bio/bio.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import {CarouselItemComponent} from './shared/carousel/carousel-item.component';
import { SocialBarComponent } from './shared/social-bar/social-bar.component';

const appRoutes: Routes = [
  { path: 'visit', component: VisitComponent },
  { path: 'volunteer', component: VolunteerComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'meetTheHerd', component: MeetTheHerdComponent },
  { path: 'meetTheStaff', component: MeetTheStaffComponent },
  { path: '',      component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    VisitComponent,
    HomeComponent,
    VolunteerComponent,
    DonateComponent,
    MeetTheHerdComponent,
    MeetTheStaffComponent,
    BioComponent,
    CarouselComponent,
    CarouselItemComponent,
    SocialBarComponent
  ],
  imports: [
    RouterModule.forRoot( appRoutes ),
    BrowserModule,
    MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatListModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
