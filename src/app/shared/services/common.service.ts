import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private secName = new Subject<string>();
  secName$ = this.secName.asObservable();

  public isOtherScreen: boolean = false;

  constructor() {

  }

  // Nav element active

  public currentActive = 1;

  // For scroll to element

  scrollTo(sectionName: string) {
    this.secName.next(sectionName);
  }

}
