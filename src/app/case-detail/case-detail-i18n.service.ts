import { Injectable } from '@angular/core';
import { I18nService } from 'src/app/shared/services/i18n.service';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaseDetailI18nService {

  public current_lang = "";
  public i18n_data$ = new Subject<string>();

  constructor(private http: HttpClient, public i18nService: I18nService) {

    this.current_lang = localStorage.getItem('current_lang');

    this.i18nService.langSubject$.subscribe((data) => {
      this.current_lang = data;
      this.getData();
    })

  }

  getData() {
    if (this.current_lang == "english") {
      this.http.get<any>('./assets/i18n/case-detail/english.json').subscribe((data) => {
        this.i18n_data$.next(data);
      })
    }
    if (this.current_lang == "dutch") {
      this.http.get<any>('./assets/i18n/case-detail/dutch.json').subscribe((data) => {
        this.i18n_data$.next(data);
      })
    }
  }


}
