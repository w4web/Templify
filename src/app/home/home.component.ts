import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { CommonService } from '../shared/services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor(public commonService: CommonService) {

    this.commonService.currentActive = 1;

    this.commonService.secName$.subscribe(
      data => {
        if (data == "banner") {
          this.scroll(this.bannerElement.nativeElement);
        }
        if (data == "method") {
          this.scroll(this.methodElement.nativeElement);
        }
        if (data == "about") {
          this.scroll(this.aboutElement.nativeElement);
        }
        if (data == "brands") {
          this.scroll(this.brandsElement.nativeElement);
        }
        if (data == "cases") {
          this.scroll(this.casesElement.nativeElement);
        }
        if (data == "contact") {
          this.scroll(this.contactElement.nativeElement);
        }
      });
  }

  @ViewChild('banner') bannerElement: ElementRef;
  @ViewChild('method') methodElement: ElementRef;
  @ViewChild('about') aboutElement: ElementRef;
  @ViewChild('brands') brandsElement: ElementRef;
  @ViewChild('cases') casesElement: ElementRef;
  @ViewChild('contact') contactElement: ElementRef;

  public bannerOffset: Number = null;
  public methodOffset: Number = null;
  public aboutOffset: Number = null;
  public brandsOffset: Number = null;
  public casesOffset: Number = null;
  public contactOffset: Number = null;

  scroll(el: HTMLElement) {
    // el.scrollIntoView({ behavior: 'smooth' });
    var headerOffset = 70;
    var elementPosition = el.offsetTop;
    var offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }

  ngAfterViewInit() {
    if (window.innerWidth >= 992) {
      this.bannerOffset = this.bannerElement.nativeElement.offsetTop - 212;
    } else {
      this.bannerOffset = this.bannerElement.nativeElement.offsetTop - 98;
    }

    this.methodOffset = this.methodElement.nativeElement.offsetTop - 70;
    this.aboutOffset = this.aboutElement.nativeElement.offsetTop - 70;
    this.brandsOffset = this.brandsElement.nativeElement.offsetTop - 70;
    this.casesOffset = this.casesElement.nativeElement.offsetTop - 70;
    this.contactOffset = this.contactElement.nativeElement.offsetTop - 70;

  }

  @HostListener('window:scroll', ['$event'])
  checkOffsetTop() {
    if (window.pageYOffset >= this.bannerOffset && window.pageYOffset < this.methodOffset) {
      this.commonService.currentActive = 1;
    } else if (window.pageYOffset >= this.methodOffset && window.pageYOffset < this.aboutOffset) {
      this.commonService.currentActive = 2;
    } else if (window.pageYOffset >= this.aboutOffset && window.pageYOffset < this.brandsOffset) {
      this.commonService.currentActive = 3;
    } else if (window.pageYOffset >= this.brandsOffset && window.pageYOffset < this.casesOffset) {
      this.commonService.currentActive = 4;
    } else if (window.pageYOffset >= this.casesOffset && window.pageYOffset < this.contactOffset) {
      this.commonService.currentActive = 5;
    } else if (window.pageYOffset >= this.contactOffset) {
      this.commonService.currentActive = 6;
    } else {
      this.commonService.currentActive = 0;
    }
  }

}
