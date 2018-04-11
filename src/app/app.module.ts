import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatSidenavModule, MatToolbarModule, MatIconModule,
  MatButtonModule, MatMenuModule, MatListModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatListModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
