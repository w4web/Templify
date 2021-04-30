import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonService } from '../shared/services/common.service';
import { CaseDetailI18nService } from './case-detail-i18n.service';

@Component({
  selector: 'app-case-detail',
  templateUrl: './case-detail.component.html',
  styleUrls: ['./case-detail.component.css']
})
export class CaseDetailComponent implements OnInit, OnDestroy {

  public i18n_data: any = {};

  constructor(public commonService: CommonService, public caseDetailI18nService: CaseDetailI18nService) {
    this.caseDetailI18nService.getData();
  }

  ngOnInit(): void {
    this.commonService.isOtherScreen = true;
    this.caseDetailI18nService.i18n_data$.subscribe((data) => {
      this.i18n_data = data;
    })
  }

  ngOnDestroy() {
    this.commonService.isOtherScreen = false;
  }

}
