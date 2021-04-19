import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseDetailRoutingModule } from './case-detail-routing.module';
import { CaseDetailComponent } from './case-detail.component';


@NgModule({
  declarations: [
    CaseDetailComponent
  ],
  imports: [
    CommonModule,
    CaseDetailRoutingModule
  ]
})
export class CaseDetailModule { }
