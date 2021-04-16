import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { AboutComponent } from './about/about.component';
import { TextBlockComponent } from './text-block/text-block.component';
import { CasesComponent } from './cases/cases.component';


@NgModule({
  declarations: [
    AboutUsComponent,
    AboutComponent,
    TextBlockComponent,
    CasesComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ]
})
export class AboutUsModule { }
