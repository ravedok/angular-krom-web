import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuComponent } from './shared/menu/menu.component';
import { LanguageSelectorComponent } from './shared/language-selector/language-selector.component';
import { CategoriesMenuComponent } from './shared/categories-menu/categories-menu.component';
import { LogoComponent } from './shared/logo/logo.component';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    LanguageSelectorComponent,
    CategoriesMenuComponent,
    LogoComponent
  ],
  imports: [CommonModule, HttpClientModule, FontAwesomeModule, HomeModule],
  exports: [LayoutComponent]
})
export class LayoutModule {}
