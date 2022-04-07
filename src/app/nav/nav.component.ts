import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(private translateService: TranslateService) { }

  public selectLanguage(event: any) {
    this.translateService.use(event.target.value);
  }

}