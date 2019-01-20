import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { httpInterceptorProviders } from './interceptors';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LayoutModule, HomeModule],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
