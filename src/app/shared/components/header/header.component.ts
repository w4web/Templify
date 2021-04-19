import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isMenuCollapsed = true;
  constructor(public commonService: CommonService) { }

  shrinkHeader: boolean = false;

  ngOnInit(): void {
    this.animateHeader();
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

}
