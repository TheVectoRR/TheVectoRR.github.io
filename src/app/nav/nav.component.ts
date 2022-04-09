import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageDirectionService } from '../services/language-direction.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(
    private translateService: TranslateService,
    private languageDirectionService: LanguageDirectionService
  ) { }

  public selectLanguage(event: any) {
    this.translateService.use(event.target.value);
    this.languageDirectionService.setDirection(event.target.value);
  }

  public get languageDirection(): string {
    return this.languageDirectionService.textDirection;
  }

}
