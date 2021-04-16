import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { MethodComponent } from './method/method.component';
import { AboutComponent } from './about/about.component';
import { BrandsComponent } from './brands/brands.component';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    MethodComponent,
    AboutComponent,
    BrandsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
