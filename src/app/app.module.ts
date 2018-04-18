import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatSidenavModule, MatToolbarModule, MatIconModule,
  MatButtonModule, MatMenuModule, MatListModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {NgxCarouselModule} from 'ngx-carousel';
import 'hammerjs';
import { VisitComponent } from './visit/visit.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { DonateComponent } from './donate/donate.component';
import { MeetTheHerdComponent } from './meet-the-herd/meet-the-herd.component';

const appRoutes: Routes = [
  { path: 'visit', component: VisitComponent },
  { path: 'volunteer', component: VolunteerComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'meetTheHerd', component: MeetTheHerdComponent },
  { path: '',      component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    VisitComponent,
    HomeComponent,
    VolunteerComponent,
    DonateComponent,
    MeetTheHerdComponent
  ],
  imports: [
    RouterModule.forRoot( appRoutes ),
    BrowserModule,
    MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatListModule,
    BrowserAnimationsModule, NgxCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
