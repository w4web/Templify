import { Component, OnInit } from '@angular/core';
import { HomeI18nService } from '../home-i18n.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

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
