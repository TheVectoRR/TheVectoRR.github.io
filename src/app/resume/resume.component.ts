import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LanguageDirectionService } from '../services/language-direction.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  public jobs$: Observable<string[]> = of([]);

  constructor(
    private http: HttpClient,
    private languageDirectionService: LanguageDirectionService
  ) {
  }

  public ngOnInit(): void {
    this.jobs$ = this.http.get<string[]>('./assets/experience.json')
  }

  public get languageDirection(): string {
    return this.languageDirectionService.textDirection;
  }

}
