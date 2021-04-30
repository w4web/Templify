import { Component, OnInit } from '@angular/core';
import { HomeI18nService } from 'src/app/home/home-i18n.service';
import { CommonService } from '../../services/common.service';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isMenuCollapsed = true;
  public shrinkHeader: boolean = false;
  public current_lang = "";
  public languages = [
    {
      text: "English",
      value: "english"
    },
    {
      text: "Dutch",
      value: "dutch"
    }
  ];
  public i18n_data: any = {};

  constructor(public commonService: CommonService, public i18nService: I18nService, public homeI18nService: HomeI18nService) {

    this.current_lang = localStorage.getItem('current_lang');
    // console.log("current lang", this.current_lang);
    this.i18nService.langSubject$.subscribe((data) => {
      this.current_lang = data;
      // console.log("current lang", this.current_lang);
    })

    this.homeI18nService.getData();

  }

  ngOnInit(): void {
    this.animateHeader();
    this.homeI18nService.i18n_data$.subscribe((data) => {
      this.i18n_data = data;
    })
  }

  animateHeader() {
    window.onscroll = () => {
      if (window.pageYOffset > 120) {
        this.shrinkHeader = true;
      } else {
        this.shrinkHeader = false;
      }
    }
  }

  langChange(value) {
    this.i18nService.langChange(value);
  }

}
