import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class I18nService {

  public default_lang = "dutch";
  public langSubject$ = new Subject<string>();

  constructor() {
    if (localStorage.getItem('current_lang') === null) {
      localStorage.setItem('current_lang', this.default_lang);
    }
  }

  langChange(value) {
    localStorage.setItem('current_lang', value);
    this.langSubject$.next(value);
  }


}
