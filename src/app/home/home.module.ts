import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [HomeComponent, SliderComponent],
  imports: [CommonModule],
  exports: [HomeComponent]
})
export class HomeModule {}
