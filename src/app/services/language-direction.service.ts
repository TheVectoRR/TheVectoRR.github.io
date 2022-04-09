import { Injectable } from '@angular/core';

Injectable()
export class LanguageDirectionService {

  public textDirection = 'ltr'

  constructor() {
    this.CheckDirection();
  }

  public setDirection(language: string): void {
    if (language === 'he-IL') { // he - hebrew language
      this.textDirection = 'rtl';
    } else {
      this.textDirection = 'ltr';
    }
    localStorage.setItem('lang', this.textDirection);
  }

  public CheckDirection(): void {
    const lang = localStorage.getItem('lang');
    if (lang === 'he-IL') { // he - hebrew language
      this.textDirection = 'rtl';
    } else {
      this.textDirection = 'ltr';
    }
  }
}
