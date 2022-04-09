import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-section',
  templateUrl: './cv-section.component.html',
  styleUrls: ['./cv-section.component.scss']
})
export class CvSectionComponent implements OnInit {

  @Input() set job(value: string) {
    this.titleI18Key = `experience.${value}.title`;
    this.descriptionI18Key = `experience.${value}.description`;
    this.timeSpentI18Key = `experience.${value}.time_spent`;
    this.clientI18Key = `experience.${value}.client`;
  }

  titleI18Key = '';
  descriptionI18Key = '';
  timeSpentI18Key = '';
  clientI18Key = '';

  constructor() { }

  ngOnInit(): void {
  }

}
