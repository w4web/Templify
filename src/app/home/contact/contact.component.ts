import { Component, OnInit } from '@angular/core';
import { HomeI18nService } from '../home-i18n.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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
