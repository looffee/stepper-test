import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { StepperComponent } from './stepper/stepper.component';
import { StepperHeaderUnderlineComponent } from './stepper-header-underline/stepper-header-underline.component';
import { StepperHeaderComponent } from './stepper-header/stepper-header.component';

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    StepperHeaderUnderlineComponent,
    StepperHeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
