import { Component, OnInit } from '@angular/core';
import { HomeI18nService } from '../home-i18n.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {

  public i18n_data: any = {};

  constructor(public homeI18nService: HomeI18nService) {
    this.homeI18nService.getData();
  }

  ngOnInit(): void {
    this.homeI18nService.i18n_data$.subscribe((data) => {
      this.i18n_data = data;
    })
  }

}
