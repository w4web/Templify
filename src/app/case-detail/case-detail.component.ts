import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonService } from '../shared/services/common.service';

@Component({
  selector: 'app-case-detail',
  templateUrl: './case-detail.component.html',
  styleUrls: ['./case-detail.component.css']
})
export class CaseDetailComponent implements OnInit, OnDestroy {

  constructor(public commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.isOtherScreen = true;
  }

  ngOnDestroy() {
    this.commonService.isOtherScreen = false;
  }

}
