import { Component, OnInit } from '@angular/core';
import { HomeI18nService } from '../home-i18n.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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
